'use client'

import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

// Example placeholder images
const projects = Array.from({ length: 6 }).map((_, i) => ({
    title: `Project #${i + 1}`,
    description: "Brief description of the project.",
}));

export default function ProjectsPage() {
    return (
        <div className="bg-white text-black">

            {/* Projects Hero / Title */}
            <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 scroll-mt-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Showroom / Projects</h1>
                <p className="mt-4 text-neutral-700 text-lg md:text-xl max-w-3xl mx-auto">
                    Take a look at some of our recent residential and commercial projects.
                </p>
            </section>

            {/* Projects Grid */}
            <section className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200 scroll-mt-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
                            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center text-neutral-400">
                                <span className="text-sm">Project Image</span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                                <p className="text-sm text-neutral-700">{project.description}</p>
                                {/* Optional button */}
                                <Link href={`/projects/${index + 1}`}>
                                    <Button variant="ghost" className="mt-3 px-4 py-2 text-sm">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
