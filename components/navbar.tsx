"use client"
import Link from "next/link";
import { ModeToggle } from "./modeToggler";
import {delay, motion} from "framer-motion"

export default function Navbar() {
 
    return (
        <>
        <div 
        className="flex items-center justify-between sm:max-w-3xl px-2 sm:px-0 mx-auto mt-4 mb-2">
        <Link href={"/"} className="">
         <motion.div  
           className="text-6xl font-bold ">
            <motion.span initial={{y:-1000,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.3,duration:0.5}} className="inline">Blog</motion.span>
            <motion.span initial={{y:-1000,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.4,duration:0.5,}}
             className="text-primary inline">Fest</motion.span>
         </motion.div>
        </Link>
           <motion.span initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} 
           transition={{delay:1.5, duration:1,type:"spring",stiffness:350}}
           whileHover={{scale:1.1}}
            >
            <Link className=" shadow-blue-500  
           transition duration-150 text-primary 
           font-bold italic font-serif" 
            href={"/about"}>About the author</Link>
           </motion.span>
           <ModeToggle/>
        
           </div>
           <motion.h2 
           initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:1.1, duration:3,type:"spring",stiffness:250}}
           className=" mt-1 max-w-md sm:max-w-lg mx-auto italic 
           font-semibold font-serif sm:mt-1 sm:text-2xl mb-2 ">A written expression of my thoughts</motion.h2> 
           </>
    );
}
 