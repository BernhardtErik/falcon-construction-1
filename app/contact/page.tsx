'use client'

import { Button } from "@heroui/react";

export default function ContactPage() {
    return (
        <div className="bg-white text-black">

            {/* Contact Page Hero */}
            <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 scroll-mt-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                <p className="mt-4 text-neutral-700 text-lg md:text-xl max-w-3xl mx-auto">
                    Reach out to discuss your project. We’ll get back to you within one business day.
                </p>
            </section>

            {/* Contact Form & Info */}
            <section className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200 scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Form */}
                    <form className="rounded-lg border border-neutral-200 p-6 bg-white space-y-4">
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input className="w-full rounded-md border border-neutral-300 px-3 py-2" placeholder="Your name" />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input type="email" className="w-full rounded-md border border-neutral-300 px-3 py-2" placeholder="you@email.com" />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea rows={4} className="w-full rounded-md border border-neutral-300 px-3 py-2" placeholder="Tell us about your project" />
                        </div>

                        {/* Hero UI Button (TypeScript-safe) */}
                        <Button
                            variant="solid"
                            className="mt-3 bg-black text-white px-6 py-3"
                            type="submit"
                        >
                            Send Message
                        </Button>
                    </form>

                    {/* Contact Info */}
                    <div className="text-neutral-700">
                        <p className="mb-4">
                            You can also reach us via phone, email, or visit our office:
                        </p>
                        <div className="space-y-2">
                            <p><span className="font-medium">Phone:</span> (000) 123-4567</p>
                            <p><span className="font-medium">Email:</span> info@falconconstruction.com</p>
                            <p><span className="font-medium">Location:</span> Your City, Country</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
