"use client";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScrollContext } from "../context/scrollBarContext";

export default function Video() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollbar = useScrollContext();
  const scrollYMotion = useMotionValue(0);
  const [divPosition, setDivPosition] = useState(0);

  useEffect(() => {
    if (!scrollbar) return;

    const calculateDivPosition = () => {
      if (!scrollRef.current) return;

      const rect = scrollRef.current.getBoundingClientRect();
      setDivPosition(rect.top + scrollbar.scrollTop);
    };

    calculateDivPosition();

    window.addEventListener("resize", calculateDivPosition);

    const updateScrollY = () => {
      const scrollY = scrollbar.scrollTop;
      scrollYMotion.set(scrollY);
    };

    scrollbar.addListener(updateScrollY);

    return () => {
      scrollbar.removeListener(updateScrollY);
      window.removeEventListener("resize", calculateDivPosition);
    };
  }, [scrollbar, scrollYMotion]);

  const startAnimation = divPosition - window.innerHeight;
  const endAnimation = divPosition;
  console.log(startAnimation, endAnimation);

  const clipPathValue = useTransform(
    scrollYMotion,
    [startAnimation, endAnimation],
    ["inset(45% 45% 45% 45%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <div className="max-w-screen-2xl flex flex-col mx-auto mt-28 md:mb-36 mb-16 md:mt-56">
      <h2 className="sub-heading md:max-w-[1170px] px-4 lg:px-8 pb-10">
        We aim to shepherd your ambitious goals and unique ideas to reality.
      </h2>
      <motion.div
        className="min-h-screen relative "
        ref={scrollRef}
        style={{ clipPath: clipPathValue }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-tan to-10% z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center mix-blend-difference">
          <svg
            className="top-0 left-0 right-0 w-[195px] md:w-[264px]"
            viewBox="0 0 2400 1430"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              className=""
              fill="white"
              points="1360.08,210.22 1239.11,0.91 413.71,0.91 1,715 413.71,1429.09 1239.11,1429.09 897.33,546.43 	"
            />
            <polygon
              className=""
              fill="white"
              points="1648.17,0.91 1360.08,210.22 1651.82,715 1239.11,1429.09 2057.22,1429.09 2399,546.43 	"
            />
          </svg>
        </div>
        <motion.video
          className="object-cover min-h-screen relative"
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

      <h2 className="sub-heading md:max-w-[1390px] px-4 lg:px-8 pt-10">
        The services we provide are rooted in the talent we’ve cultivated and
        our shared experiences.
      </h2>
    </div>
  );
}
