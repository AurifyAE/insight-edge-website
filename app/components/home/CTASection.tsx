import ContactForm from "@/app/components/contact/ContactForm";

export default function CTASection() {
    return (
        <section className="w-full bg-[#C6DB5A] py-16">
            <div className="max-w-4xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1E2E4B] mb-4">
                        Ready to Safeguard Your Value?
                    </h2>
                    <p className="text-sm md:text-base text-[#1E2E4B]/70 max-w-2xl mx-auto">
                        Let's discuss how we can support your precious metals business with
                        expert financial and compliance advisory
                    </p>
                </div>

                {/* Contact form */}
                <div className="max-w-3xl mx-auto rounded-3xl bg-white p-6 md:p-10 shadow-xl shadow-[#1E2E4B]/10">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
