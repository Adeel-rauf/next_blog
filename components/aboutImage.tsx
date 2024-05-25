"use client"
import Image from "next/image";
import {motion} from "framer-motion"
export default function AboutImage() {
    return (
        <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:1}} transition={{duration:0.6}}>
        <Image className="mx-auto dark:invert mt-5 " src="/3.png" alt="image" height={400} width={400} />
        </motion.div>
    );
}
