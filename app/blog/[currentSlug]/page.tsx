import { wBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import BlogPage from "@/components/blogPage";


export async function getData(slug:string){
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

export default async function currentSlugPost({params}:{params:{currentSlug:string}}) {
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