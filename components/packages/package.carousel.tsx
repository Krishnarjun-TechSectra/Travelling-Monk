"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { packages } from "@/data/package";
import PackageCard from "./package.card";

const PackageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-6 embla_slides">
          {packages.map((pack, idx) => (
            <PackageCard
              image={pack.imageURL}
              title={pack.title}
              description={pack.description}
              key={idx}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-4 px-4">
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: packages.length / 3 + 2 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2  h-2  rounded-full ${
                selectedIndex === idx ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageCarousel;
