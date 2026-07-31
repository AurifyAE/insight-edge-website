import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@insightedge.global";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "";

interface ContactPayload {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    service?: string;
    message: string;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getTransporter() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        return null;
    }

    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
}

export async function POST(request: Request) {
    const transporter = getTransporter();
    if (!transporter || !FROM_EMAIL) {
        console.error("SMTP is not configured (missing SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS)");
        return NextResponse.json(
            { error: "Email service is not configured." },
            { status: 500 }
        );
    }

    let body: ContactPayload;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { fullName, email, phone, company, service, message } = body;

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json(
            { error: "Full name, email, and message are required." },
            { status: 400 }
        );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const rows = [
        ["Full Name", fullName],
        ["Email", email],
        ["Phone", phone || "-"],
        ["Company", company || "-"],
        ["Service of Interest", service || "-"],
    ];

    const html = `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
            ${rows
                .map(
                    ([label, value]) =>
                        `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`
                )
                .join("")}
        </table>
        <p style="font-weight:bold">Message</p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    try {
        await transporter.sendMail({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `New inquiry from ${fullName}${company ? ` (${company})` : ""}`,
            html,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form send failed:", err);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}
