export interface dataT{
    title:string,
    summary:string,
    currentSlug:string,
    image:any
}
export interface wBlog{
    title:string,
    summary:string,
    currentSlug:string,
    image:any,
    content:[]
}
export interface homePageProps{
    imageSource:any,
    imageTitle:string,
    linkRef:string,
    title:string,
    summary:string,
    currentSlug:string
}
export interface mainCardProps{
    is:any,
    it:string,
    lr:string,
    tt:string,
    sum:string,
    cs:string
}
export interface blogP{
    title:string,
    image:any,
    content:any
}