"use client"
import {motion, useScroll} from "framer-motion"
import { useRef } from "react";
import {useInView} from "framer-motion"
export default function AboutPara() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref)
    // const {scrollYProgress} = useScroll({
    //     target:ref,
    //     offset:["0 1", "1.40 1"]
    // })
    // const paraAnimate = {
    //     initial:{
    //         x:-20,
    //         opacity:0
    //     },
    //     animate:{
    //         x:1,
    //         opacity:1
            
    //     },
    // }
    
    
    
    return (
        <motion.div
        className="flex flex-col gap-2">
        <p>
         <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0}}  
         className=" dark:text-white font-serif text-xl sm:text-3xl font-bold text-black">
            Qualification:</motion.span>
         <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.8}}
         className="text-xl sm:text-3xl font-bold font-serif italic text-primary">M.E (Materials Engineernig)
         </ motion.span>
        </p>
        <motion.p initial={{x:2, opacity:0}} whileInView={{x:1, opacity:1}} transition={{duration:1,delay:1.1}} 
        className="dark:text-white font-bold font-serif text-primary text-2xl sm:text-3xl">
            Linguistic Certifications:</motion.p>
        <motion.p initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:1.8}}>
          <span className="dark:text-white text-black text-xl sm:text-3xl font-bold font-serif">
                PTE:</span>
          <span className="font-serif text-xl sm:text-3xl font-bold text-primary"> 9.0 each</span>
        </motion.p>
        <motion.p initial={{y:5,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.5,delay:2.5,type:"spring", stiffness:250}} 
        className="dark:text-white text-xl sm:text-3xl font-bold font-serif">IELTS: 
          <span className="font-serif text-xl sm:text-3xl font-bold text-primary"> 8.5 overall</span>
        </motion.p>
        </motion.div>
    );
}
