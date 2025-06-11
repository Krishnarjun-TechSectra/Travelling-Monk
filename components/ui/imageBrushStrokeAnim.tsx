"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const FRAME_HEIGHT = 205;
const TOTAL_FRAMES = 22;
const SPRITE_HEIGHT = 4510;
const FRAME_RATE = 12;
const FRAME_DURATION = 1000 / FRAME_RATE;

export default function BrushStrokeAnimation({ imageSrc = "/your-image.jpg" }: { imageSrc?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [frame, setFrame] = useState(0);
  const [done, setDone] = useState(false);
  const animationStarted = useRef(false);

  useEffect(() => {
    if (isInView && !animationStarted.current) {
      animationStarted.current = true;
      let currentFrame = 0;
      const interval = setInterval(() => {
        currentFrame++;
        if (currentFrame >= TOTAL_FRAMES) {
          clearInterval(interval);
          setDone(true);
        }
        setFrame(currentFrame);
      }, FRAME_DURATION);
    }
  }, [isInView]);

  const yPercent = (FRAME_HEIGHT * frame) / SPRITE_HEIGHT * 100;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md mx-auto overflow-hidden"
      style={done ? { backgroundImage: `url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      {!done ? (
        <div className="relative pb-[80.45%] w-full h-full overflow-hidden bg-accent-foreground">
          <motion.img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-99/brush-stroke.png"
            alt="Brush Stroke Animation"
            className="absolute top-0 left-0 w-full h-auto"
            style={{ translateY: `-${yPercent}%` }}
          />
        </div>
      ) : (
        <motion.img
          src={imageSrc}
          alt="Revealed Content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto block"
        />
      )}
    </div>
  );
}
