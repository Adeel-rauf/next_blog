"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import { inView } from "framer-motion";
export default function Intro() {
 
    return (
        <>
        <div className=" ">
        <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{
  ease: "linear",
  duration: 1,type:"spring",stiffness:150,
  x: { duration: 1}
}} className="mb-8">
        <Image className="object-cover mx-auto rounded-3xl shadow-lg opacity-85" 
        src="/1.jpg" alt="Intro image" width={650} height={600}/>
        </motion.div>
        <div className="px-1 sm:px-14 border-2 border-blue-100 shadow-lg bg-blue-300/30 dark:bg-black rounded-xl mb-8">
            <p className="leading-5 sm:leading-7 text-md sm:text-xl py-4 italic font-serif">
            <span className="text-primary text-3xl font-bold">T</span>ired of the 9-to-5 grind? Us too. Welcome to 
            <span className="font-bold">"Blog fest:</span> <span className="font-bold text-blue-900 dark:text-white">The Anti-Office Manifesto."</span> 
            {""} Here, we smash the outdated mold of employment and rewrite the rules for your working life.
            Ditch the cubicle and dive into a world of research-backed hacks that challenge the status quo.
            We'll explore unconventional career paths, the rise of the gig economy, and the science behind 
            maximizing productivity on your own terms.Forget the corner office; freedom and fulfillment are 
            the new cornerstones of success. Let's rethink work, rethink your potential, and build a career 
            that fuels your passions, not your anxieties.
            </p>
        </div>
        </div>
        </>
    );
}
