"use client";

import { motion } from "framer-motion";

export const HeroHeading = ({ text }: { text: string }) => {
  const letters = text.split("");

  return (
    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};
export const ParagraphFadeBold = ({ text }: { text: string }) => {
  return (
    <motion.p
      className=" paragraph text-justify text-muted-foreground leading-8"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {text}
    </motion.p>
  );
};

export const Subtitle = ({ text }: { text: string }) => {
  return (
    <motion.span
      className="subheading "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ x: 0, duration: 2, delay: 2, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};

export const MainHeading = ({ text }: { text: string }) => {
  const letters = text.split("");

  return (
    <h1 className="heading">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x:-20 ,y:-10}}
          whileInView={{ opacity: 1, y: 0 ,x:0}}
          transition={{
            delay: index * 0.05,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};