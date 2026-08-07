import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@insightedge.global";
const DEFAULT_FROM_EMAIL = "InsightEdge Contact <onboarding@resend.dev>";

interface ContactPayload {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    service?: string;
    message: string;
}

function getFromEmail() {
    const configuredSender = process.env.CONTACT_FROM_EMAIL?.trim();

    if (!configuredSender) {
        return DEFAULT_FROM_EMAIL;
    }

    // Resend expects a mailbox, but deployments sometimes provide only the
    // verified sending domain (for example, "contact.example.com").
    if (!configuredSender.includes("@")) {
        return `InsightEdge Contact <website@${configuredSender}>`;
    }

    return configuredSender;
}

function parseContactPayload(value: unknown): ContactPayload | null {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        return null;
    }

    const body = value as Record<string, unknown>;
    const readString = (key: string) =>
        typeof body[key] === "string" ? body[key].trim() : "";

    const fullName = readString("fullName");
    const email = readString("email");
    const message = readString("message");

    if (!fullName || !email || !message) {
        return null;
    }

    return {
        fullName,
        email,
        phone: readString("phone") || undefined,
        company: readString("company") || undefined,
        service: readString("service") || undefined,
        message,
    };
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function buildContactEmail(payload: ContactPayload) {
    const { fullName, email, phone, company, service, message } = payload;
    const submittedAt = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Dubai",
    }).format(new Date());

    const details = [
        ["Full name", fullName],
        ["Email address", email],
        ["Phone number", phone || "Not provided"],
        ["Company", company || "Not provided"],
        ["Service of interest", service || "Not specified"],
    ];

    const detailRows = details
        .map(([label, value], index) => {
            const safeValue = escapeHtml(value);
            const displayedValue = label === "Email address"
                ? `<a href="mailto:${safeValue}" style="color:#1e2e4b;text-decoration:none;font-weight:600;">${safeValue}</a>`
                : safeValue;

            return `
                <tr>
                    <td width="38%" valign="top" style="padding:${index === 0 ? "0" : "16px"} 16px 16px 0;border-bottom:1px solid #e7ebef;color:#687386;font-size:11px;font-weight:700;letter-spacing:0.08em;line-height:1.5;text-transform:uppercase;">
                        ${escapeHtml(label)}
                    </td>
                    <td valign="top" style="padding:${index === 0 ? "0" : "16px"} 0 16px 16px;border-bottom:1px solid #e7ebef;color:#1e2e4b;font-size:15px;font-weight:600;line-height:1.5;word-break:break-word;">
                        ${displayedValue}
                    </td>
                </tr>`;
        })
        .join("");

    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <title>New website enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f2f4f6;color:#1e2e4b;font-family:'Segoe UI',Tahoma,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        New enquiry from ${escapeHtml(fullName)}${company ? ` at ${escapeHtml(company)}` : ""}.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#f2f4f6;">
        <tr>
            <td align="center" style="padding:36px 16px;">
                <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background-color:#ffffff;border-radius:20px;overflow:hidden;">
                    <tr>
                        <td style="height:6px;background-color:#abbd4f;font-size:0;line-height:0;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="padding:34px 40px 36px;background-color:#1e2e4b;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td valign="middle">
                                        <div style="color:#ffffff;font-size:20px;font-weight:800;letter-spacing:0.04em;line-height:1.2;">INSIGHT<span style="color:#abbd4f;">EDGE</span></div>
                                        <div style="margin-top:6px;color:#aeb8c8;font-size:10px;font-weight:600;letter-spacing:0.16em;line-height:1.4;text-transform:uppercase;">Advisory &middot; Assurance &middot; Compliance</div>
                                    </td>
                                    <td align="right" valign="middle">
                                        <span style="display:inline-block;padding:8px 12px;border-radius:999px;background-color:#abbd4f;color:#1e2e4b;font-size:10px;font-weight:800;letter-spacing:0.1em;line-height:1;text-transform:uppercase;">Website enquiry</span>
                                    </td>
                                </tr>
                            </table>
                            <div style="margin-top:38px;color:#abbd4f;font-size:11px;font-weight:700;letter-spacing:0.12em;line-height:1.4;text-transform:uppercase;">New contact request</div>
                            <h1 style="margin:8px 0 0;color:#ffffff;font-size:30px;font-weight:700;letter-spacing:-0.02em;line-height:1.2;">A new opportunity just arrived.</h1>
                            <p style="margin:12px 0 0;color:#cbd2dc;font-size:14px;line-height:1.65;">Submitted through the InsightEdge contact form on ${escapeHtml(submittedAt)} GST.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:36px 40px 12px;">
                            <p style="margin:0 0 20px;color:#7a8495;font-size:11px;font-weight:800;letter-spacing:0.12em;line-height:1.4;text-transform:uppercase;">Contact details</p>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                                ${detailRows}
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:24px 40px 0;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#f6f7f2;border-radius:14px;">
                                <tr>
                                    <td style="padding:24px 26px;border-left:4px solid #abbd4f;">
                                        <p style="margin:0 0 12px;color:#687386;font-size:11px;font-weight:800;letter-spacing:0.12em;line-height:1.4;text-transform:uppercase;">Their message</p>
                                        <div style="color:#1e2e4b;font-size:15px;line-height:1.75;word-break:break-word;">${safeMessage}</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px 40px 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td align="center" bgcolor="#1e2e4b" style="border-radius:999px;">
                                        <a href="mailto:${safeEmail}" style="display:inline-block;padding:14px 24px;color:#ffffff;font-size:14px;font-weight:700;line-height:1;text-decoration:none;">Reply to ${escapeHtml(fullName)} &nbsp;&rarr;</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:22px 40px;background-color:#eef1f4;color:#7a8495;font-size:11px;line-height:1.6;">
                            This notification was generated automatically from the contact form at <span style="color:#1e2e4b;font-weight:700;">InsightEdge</span>. Replying to this email will respond directly to the sender.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const text = `
NEW WEBSITE ENQUIRY
Submitted ${submittedAt} GST

${details.map(([label, value]) => `${label}: ${value}`).join("\n")}

MESSAGE
${message}

Reply directly to: ${email}
`.trim();

    return { html, text };
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("Resend API key is missing (RESEND_API_KEY is not set)");
        return NextResponse.json(
            { error: "Email service is not configured." },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    let rawBody: unknown;
    try {
        rawBody = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const body = parseContactPayload(rawBody);
    if (!body) {
        return NextResponse.json(
            { error: "Full name, email, and message are required." },
            { status: 400 }
        );
    }

    const { fullName, email, company } = body;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const { html, text } = buildContactEmail(body);

    try {
        const { data, error } = await resend.emails.send({
            from: getFromEmail(),
            to: [TO_EMAIL],
            replyTo: email,
            subject: `New inquiry from ${fullName}${company ? ` (${company})` : ""}`,
            html,
            text,
        });

        if (error) {
            console.error("Resend send error:", error);
            return NextResponse.json(
                { error: error.message || "Failed to send message." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err) {
        console.error("Contact form send failed:", err);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}
