"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useInView, motion } from "framer-motion";
import {
  HeroHeading,
  MainHeading,
  ParagraphFadeBold,
  Subtitle,
} from "@/components/ui/textAniamtions"; // adjust the path as needed

interface Chapter {
  title: string;
  paragraph: string;
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

interface AboutChapterProps {
  data: Chapter[];
}

export default function AboutChapter({ data }: AboutChapterProps) {
  return (
    <section className="w-full px-4 section-margin text-gray-800" id="about">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading and Subtext */}
        <div className="text-center space-y-4">
          <MainHeading text="Who We Are" />
          <Subtitle text="A glimpse into the soul of Travelling Monk 24" />
        </div>

        {/* Dynamic Chapters */}
        {data.map(({ title, paragraph, icon, imageSrc, imageAlt }, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.3 });

          const imageVariant = {
            hidden: { x: index % 2 === 1 ? 300 : -300, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            },
          };

          const textVariant = {
            hidden: { x: index % 2 === 1 ? -300 : 300, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 1.1, delay: 1, ease: "easeOut" },
            },
          };

          return (
            <div
              key={title}
              ref={ref}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 md:gap-16 lg:gap-20`}
            >
              {/* Image reveal */}
              <motion.div
                className="md:w-1/2"
                variants={imageVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl shadow-xl"
                />
              </motion.div>

              {/* Text reveal */}
              <motion.div
                className="md:w-1/2"
                // variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="bg-transparent shadow-none border-none">
                  <CardContent className="p-0 space-y-4">
                    {/* <div className="flex items-center gap-3 text-blue-500 w-6 h-6">
                      {icon}
                    </div> */}

                    <HeroHeading text={title} />

                    <ParagraphFadeBold text={paragraph} />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
