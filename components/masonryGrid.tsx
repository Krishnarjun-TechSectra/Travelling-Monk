import Link from "next/link";

interface ImageCard {
  src: string;
  title: string;
  href?: string;
}

export default function MasonryGrid({ images }: { images: ImageCard[] }) {
  return (
    <div className="container section-margin">
      <div className="grid sm:grid-cols-12 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`col-span-12 ${
              i === 0
                ? "sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3 sm:self-end"
                : i === 1
                ? "sm:col-span-5 md:col-span-4 lg:col-span-3 sm:self-end"
                : "sm:col-span-6 md:col-span-4"
            }`}
          >
            <Link
              href={img.href || "#"}
              className="group relative block overflow-hidden focus:outline-none rounded-lg"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Snappy overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out pointer-events-none rounded-lg z-10" />
              </div>
              {/* Title stays clear and on top */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 z-20">
                <div className="font-semibold bg-white/70 backdrop-blur-md text-black rounded-md px-3 py-2 text-sm shadow">
                  {img.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
