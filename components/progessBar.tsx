"use client"
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
export default function ProgessBar() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
    return (
        <motion.div ref={ref}  style={{ scaleX }}
        className="top-0 z-10 h-1 rounded-2xl w-full fixed bg-primary dark:bg-primary origin-left ">
            
        </motion.div>
    );
}
