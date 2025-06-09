"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Chapter Title */}
        <div className="text-center space-y-2">
          <h1 className="heading">Who We Are</h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            A glimpse into the soul of{" "}
            <span className="text-blue-400 font-semibold">
              Travelling Monk 24
            </span>
          </p>
        </div>

        {data.map(({ title, paragraph, icon, imageSrc, imageAlt }, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.3 });

          const imageVariant = {
            hidden: { x: index % 2 === 1 ? 200 : -200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
          };

          const textVariant = {
            hidden: { x: index % 2 === 1 ? -200 : 200, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
          };

          return (
            <div
              key={title}
              ref={ref}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8`}
            >
              <motion.div
                className="md:w-1/2"
                variants={imageVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="object-cover rounded-xl"
                />
              </motion.div>

              <motion.div
                className="md:w-1/2"
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="bg-transparent shadow-none border-none">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center gap-3 text-blue-500 w-6 h-6">
                      {icon}
                    </div>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-gray-700 leading-relaxed text-md">
                      {paragraph}
                    </p>
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
