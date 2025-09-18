'use client'

import { Button } from "@heroui/react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-white text-black">

            {/* About Us Hero */}
            <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 scroll-mt-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">About Falcon Construction</h1>
                <p className="mt-4 text-neutral-700 text-lg md:text-xl max-w-3xl mx-auto">
                    With years of experience in construction and renovations, Falcon Construction is committed to delivering exceptional results. Our team blends modern techniques with time-tested craftsmanship to create spaces that are functional, beautiful, and durable.
                </p>
            </section>

            {/* Why Choose Us Section */}
            <section className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200 scroll-mt-24">
                <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-md border border-neutral-200 p-6 text-center">
                        <p className="font-medium text-lg mb-2">Craftsmanship</p>
                        <p className="text-neutral-700 text-sm">
                            Attention to detail in every stage of the build.
                        </p>
                    </div>
                    <div className="rounded-md border border-neutral-200 p-6 text-center">
                        <p className="font-medium text-lg mb-2">Reliability</p>
                        <p className="text-neutral-700 text-sm">
                            On-time delivery with transparent communication.
                        </p>
                    </div>
                    <div className="rounded-md border border-neutral-200 p-6 text-center">
                        <p className="font-medium text-lg mb-2">Quality Materials</p>
                        <p className="text-neutral-700 text-sm">
                            We partner with trusted suppliers for lasting results.
                        </p>
                    </div>
                    <div className="rounded-md border border-neutral-200 p-6 text-center">
                        <p className="font-medium text-lg mb-2">Safety</p>
                        <p className="text-neutral-700 text-sm">
                            Certified processes and site safety best practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="mx-auto max-w-6xl px-6 py-16 text-center scroll-mt-24">
                <p className="text-lg text-neutral-700 mb-6">
                    Ready to start your next project? Reach out and let’s make it happen!
                </p>
                <Link href="/contact">
                    <Button variant="solid" className="bg-black text-white px-6 py-3">
                        Contact Us
                    </Button>
                </Link>
            </section>

        </div>
    );
}
