"use client";

import { motion } from "framer-motion";

export const HeroHeading = ({ text }: { text: string }) => (
  <motion.h1
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="text-4xl md:text-5xl font-extrabold text-gray-900"
  >
    {text}
  </motion.h1>
);

export const ParagraphFadeBold = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <p className="text-lg leading-relaxed flex flex-wrap font-semibold">
      {words.map((word, index) => (
        <span key={index} className="relative">
          {/* Faded Skeleton (base layer) */}
          <span className="text-gray-200">{word}</span>

          {/* Typing effect (bold layer) */}
          <motion.span
            className="absolute top-0 left-0 text-gray-800 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: index * 0.02,
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

export const Subtitle = ({ text }: { text: string }) => {
  return (
    <motion.span
      className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ x: 0, duration: 1.1, delay: 1, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};
