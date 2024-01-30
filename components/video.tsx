"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Video() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({});

  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(45% 45% 45% 45%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <div
      ref={scrollRef}
      className="max-w-screen-2xl flex flex-col mx-auto md:mb-36 mb-16 md:mt-56"
    >
      <h2 className="sub-heading lg:max-w-[1170px] px-4 lg:px-8">
        We aim to shepherd your ambitious goals and unique ideas to reality.
      </h2>
      <motion.div
        className="video-container"
        style={{ clipPath: clipPathValue }}
      >
        <motion.video
          className="video"
          autoPlay
          loop
          muted
          initial={{ scale: 0.5 }}
          style={{
            scaleX: clipPathValue,
            scaleY: clipPathValue,
          }}
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </motion.video>
      </motion.div>
      <h2 className="sub-heading lg:max-w-[1390px] px-4 lg:px-8">
        The services we provide are rooted in the talent we’ve cultivated and
        our shared experiences.
      </h2>
    </div>
  );
}
