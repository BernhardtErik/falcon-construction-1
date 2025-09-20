'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import logo from "@/public/images/FALCON Construction_Logo_Black.png";

export default function HomePage() {
    const projects = Array.from({ length: 6 }).map((_, i) => ({
        title: `Project #${i + 1}`,
        description: "Brief description of the project.",
    }));

    return (
        <div className="bg-white text-black">

            {/* ====== HOME / HERO ====== */}
            <section
                id="home"
                className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] scroll-mt-24 flex items-center justify-center text-center"
            >
                {/* Background video */}
                {/*add video van miche se construction*/}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/FALCONConstruction.png"
                >
                    <source src="/videos/construction.mov" type="video/mp4" />
                    {/* Optional WebM source if provided in the future */}
                    {/* <source src="/videos/hero.webm" type="video/webm" /> */}
                </video>

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

                {/* Foreground content */}
                <div className="relative z-10 px-6 max-w-4xl mx-auto text-white">
                    <Image src={logo} alt="Falcon Construction" priority className="mx-auto h-24 w-auto drop-shadow" />
                    <h1 className="text-4xl md:text-5xl font-bold mt-6">Quality Construction. Built to Last.</h1>
                    <p className="mt-4 text-neutral-200 text-lg md:text-xl">
                        Falcon Construction delivers residential and commercial projects with craftsmanship, reliability, and transparency.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        <Link href="#projects">
                            <Button variant="solid" className="bg-white text-black px-6 py-3">
                                View Projects
                            </Button>
                        </Link>

                        <Link href="#contact">
                            <Button variant="ghost" className="border border-white text-white px-6 py-3">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== ABOUT US ====== */}
            <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                        <p className="text-neutral-700">
                            With years of experience in construction and renovations, Falcon Construction is committed to delivering exceptional results. Our team blends modern techniques with time-tested craftsmanship to create spaces that are functional, beautiful, and durable.
                        </p>
                        <Link href="#about">
                            <Button variant="solid" className="mt-6 bg-black text-white">
                                Learn More
                            </Button>
                        </Link>
                    </div>

                    <div className="rounded-lg border border-neutral-200 p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-3 text-center">Why Choose Us</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-md border border-neutral-200 p-4 text-center">
                                <p className="font-medium">Craftsmanship</p>
                                <p className="text-sm text-neutral-700">Attention to detail in every stage of the build.</p>
                            </div>
                            <div className="rounded-md border border-neutral-200 p-4 text-center">
                                <p className="font-medium">Reliability</p>
                                <p className="text-sm text-neutral-700">On-time delivery with transparent communication.</p>
                            </div>
                            <div className="rounded-md border border-neutral-200 p-4 text-center">
                                <p className="font-medium">Quality Materials</p>
                                <p className="text-sm text-neutral-700">We partner with trusted suppliers for lasting results.</p>
                            </div>
                            <div className="rounded-md border border-neutral-200 p-4 text-center">
                                <p className="font-medium">Safety</p>
                                <p className="text-sm text-neutral-700">Certified processes and site safety best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PROJECTS ====== */}
            <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <h2 className="text-3xl font-semibold mb-8 text-center">Showroom / Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
                            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center text-neutral-400">
                                <span className="text-sm">Project Image</span>
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                                <p className="text-sm text-neutral-700">{project.description}</p>
                                <Link href={`/projects/${index + 1}`}>
                                    <Button variant="ghost" className="mt-3 px-4 py-2 border border-black text-black text-sm">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ====== CONTACT ====== */}
            <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
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
                        <Button variant="solid" className="mt-3 bg-black text-white px-6 py-3" type="submit">
                            Send Message
                        </Button>
                    </form>

                    {/* Contact Info */}
                    <div className="text-neutral-700">
                        <p className="mb-4">You can also reach us via phone, email, or visit our office:</p>
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
