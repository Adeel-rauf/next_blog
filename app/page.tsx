import { dataT } from "@/app/lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Intro from "@/components/intro";
import Readmore from "@/components/Readmore";
export const revalidate = 30; // revalidate at most every 30 seconds

async function getData(){
const query = `*[
  _type=="blog"] | order(_createdAt desc)
{
  title,
    summary,
    "currentSlug":slug.current,
    image
}
`

const data = await client.fetch(query)
return data;
}

export default async function page() {
 const data:dataT[] = await getData();
 console.log(data)
  return(
    <>
    <Intro/>
    <span className="font-bold text-primary text-lg sm:text-3xl italic font-serif">
      Our thought shattering blogs</span>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
  {data.map((item:dataT,i:number)=>
    <Card key={i} className="px-1 py-1 bg-blue-100/50 dark:bg-black ">
      
      <Image className="dark:backdrop-invert-0 h-[250px] object-cover rounded-lg shadow-sm"
       src={urlFor(item.image).url()} alt={item.title} width={500} height={600} priority/>
      <CardContent>
      <Link className="line-clamp-2" href={`/blog/${item.currentSlug}`}>
        <h1
         className="  rounded-md px-2 mt-2 mb-2 text-primary font-bold text-center 
         hover:underline transition hover:scale-105 duration-150">{item.title}</h1></Link>
        <p className=" line-clamp-5 px-2 text-justify text-black font-semibold dark:text-white ">{item.summary}</p>
      <Readmore>
        <Link href={`/blog/${item.currentSlug}`}>Read More</Link></Readmore>
      </CardContent>
    </Card>
    
    
    )}
    </div>
    </>
  )
}