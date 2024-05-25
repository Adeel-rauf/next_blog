"use client"
import {motion} from "framer-motion"   
import MacroPara from "./macroPara";
export default function AboutParaDesc() {
    return (
        <>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} 
        className="text-black font-serif text-xl tracking-normal leading-8 dark:text-white">
            <MacroPara/>
            </motion.p>
        </>
    );
}
