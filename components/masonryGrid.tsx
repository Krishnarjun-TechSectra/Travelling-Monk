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
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-lg overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-lg w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="font-semibold rounded-md bg-primary-foreground/50 p-3 text-base">
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
