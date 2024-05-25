"use client"
import { blogP } from "@/app/lib/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";
import {motion} from "framer-motion"
export default function BlogPage({key,title,image,content}:blogP) {
    return (
        
        <div key={key}>
    <motion.h1 initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8}}
    className="mt-5 text-2xl sm:text-4xl text-primary font-bold font-sans text-center">{title}</motion.h1>
    <div className="text-center mt-4">
    <motion.span className="text-black text-2xl font-bold font-serif"
    initial={{opacity:0, scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:1,delay:1}}>Author: </motion.span> 
    
    <motion.span initial={{opacity:0, y:-50}} whileInView={{opacity:1,y:1}} transition={{duration:1,delay:1.3}} 
    className="text-primary text-2xl font-bold font-serif">Adeel Rauf</motion.span>
    </div>
    <motion.div initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8}}>
    <Image className=" dark:backdrop-invert-0 mt-8 border-1 border-slate-400 
    h-[400px] w-[800px] rounded-lg shadow-lg mx-auto object-cover" 
    src={image} alt={title} width={500} height={500} priority/>
  </motion.div>

    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}
    className="prose-headings:font-bold prose-lg 
    leading-6 mt-10 font-serif text-xl text-justify tracking-wide sm:px-28 ">
    <PortableText  value={content}/>
    </motion.div>
    </div>
    );
}
