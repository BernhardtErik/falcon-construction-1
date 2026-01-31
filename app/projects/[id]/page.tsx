"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useState, use } from "react";
import { projectsData } from "@/config/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = use(params);
  const projectId = parseInt(id);
  const project = projectsData.find((p) => p.id === projectId);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  if (!project) {
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button
              variant="solid"
              className="bg-yellow-400 text-black font-semibold"
            >
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentMedia = project.gallery[selectedMediaIndex];
  const isVideo = currentMedia.toLowerCase().endsWith(".mp4");

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-8 scroll-mt-24">
        <Link href="/#projects">
          <Button
            variant="ghost"
            className="mb-6 border border-yellow-400 text-yellow-400 px-4 py-2"
          >
            ← Back to Projects
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-neutral-700">{project.description}</p>
      </section>

      {/* Gallery Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-yellow-400">
        <h2 className="text-3xl font-semibold mb-8">Gallery</h2>

        {/* Main Display */}
        <div className="mb-8 rounded-lg overflow-hidden border border-yellow-400 bg-neutral-100">
          {isVideo ? (
            <video
              src={currentMedia}
              controls
              className="w-full h-auto"
              style={{ aspectRatio: "16/9" }}
            />
          ) : (
            <Image
              src={currentMedia}
              alt={`${project.title} - Image ${selectedMediaIndex + 1}`}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {project.gallery.map((media, index) => {
            const isVideoThumb = media.toLowerCase().endsWith(".mp4");
            return (
              <button
                key={index}
                onClick={() => setSelectedMediaIndex(index)}
                className={`flex-shrink-0 relative w-24 h-24 rounded-lg overflow-hidden border-2 transition ${
                  index === selectedMediaIndex
                    ? "border-yellow-400"
                    : "border-neutral-300 hover:border-yellow-400"
                }`}
              >
                {isVideoThumb ? (
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center relative">
                    <video src={media} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={media}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Description Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-yellow-400">
        <h2 className="text-3xl font-semibold mb-6">Project Details</h2>
        <div className="bg-neutral-50 border border-yellow-400 rounded-lg p-8">
          <p className="text-neutral-700 leading-relaxed text-lg">
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-yellow-400">
        <div className="flex justify-between items-center">
          <Link href="/#projects">
            <Button
              variant="ghost"
              className="border border-yellow-400 text-yellow-400 px-6 py-3"
            >
              ← All Projects
            </Button>
          </Link>
          <Link href="/#contact">
            <Button
              variant="solid"
              className="bg-yellow-400 text-black px-6 py-3 font-semibold"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
