import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

const workshopImages = [
  {
    src: "/workshops/workshop-1.jpg",
    alt: "Maatratva workshop session",
  },
  {
    src: "/workshops/workshop-2.jpg",
    alt: "Mothers participating in a Maatratva workshop",
  },
  {
    src: "/workshops/workshop-3.jpg",
    alt: "Maatratva wellness workshop",
  },
  {
    src: "/workshops/workshop-4.jpg",
    alt: "Maatratva community workshop",
  },
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F4] pt-28">
      <section className="section-padding">
        <div className="container-wide">
          <Link
            href="/programs"
            className="mb-10 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#A15C7A]"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </Link>

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#A15C7A]">
              Our Community
            </p>

            <h1 className="font-display text-5xl font-semibold leading-tight text-[#4B3B3B] md:text-6xl">
              Moments From Our{" "}
              <span className="text-[#A15C7A]">Workshops</span>
            </h1>

            <p className="mt-5 font-body text-lg leading-relaxed text-[#7C6A6A]">
              A glimpse into the nurturing, joyful and transformative
              experiences shared by our Maatratva community.
            </p>
          </div>

          {/* Featured workshop video */}
          <div
            className="mb-12 overflow-hidden rounded-[30px] border p-4 md:p-6"
            style={{
              background:
                "linear-gradient(135deg, #FFF9FA 0%, #F7E6EC 100%)",
              borderColor: "rgba(161,92,122,0.2)",
            }}
          >
            <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#4B3B3B]">
              <video
                controls
                playsInline
                poster="/workshops/workshop-video-cover.jpg"
                className="h-full w-full object-cover"
              >
                <source
                  src="/workshops/workshop-highlight.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-body text-sm font-semibold text-[#A15C7A]">
                <Play size={14} fill="currentColor" />
                Workshop Highlights
              </div>
            </div>
          </div>

          {/* Workshop image gallery */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workshopImages.map((image) => (
              <div
                key={image.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-[24px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}