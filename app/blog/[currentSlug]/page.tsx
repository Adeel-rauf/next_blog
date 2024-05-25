import { wBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import BlogPage from "@/components/blogPage";
import { PortableText } from "next-sanity";
import Image from "next/image";

export async function getData(slug:any){
const query = `*[
    _type=="blog" && slug.current=="${slug}"] 
  {
    title,
      summary,
      "currentSlug":slug.current,
      content,
      image
  }[0]
  `
  const data = await client.fetch(query)
  return data;
}

export default async function page({params}:{params:{currentSlug:string}}) {
 const data:wBlog = await getData(params.currentSlug);
 
return(
    <>
    <BlogPage key={data.currentSlug} 
    content={data.content} 
    image={urlFor(data.image).url()} 
    title={data.title} />
    </>
)

}