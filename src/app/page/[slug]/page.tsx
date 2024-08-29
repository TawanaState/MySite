import { NavBar, Footer } from "@/app/components";
import { mypages } from "../../data";
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props,parent: ResolvingMetadata) {
    // read route params
    try {
        const post = mypages.filter((v : any) => {return v.slug.includes(params.slug)})[0];

        return {
            title: post.title,
            keywords: post.keywords,
            description: post.description,
            authors: [{ name: 'Tawananyasha Mukoriwo', url: 'https://tawananyasha.com' }],
            openGraph: {
              images: `/img/covers/` + post.cover,
              title: post.title,
              description: post.description,
              type: 'article',
              publishedTime: (new Date()).toISOString(),
              authors: ["Tawananyasha Mukoriwo", 'Tawana State'],
            },
          }

    } catch (error) {
        return {
            title : "404"
        }
    }
    
    
}

export default function Page({ params, searchParams }: Props) {
    try {
        const post = mypages.filter((v : any) => {return v.slug.includes(params.slug)})[0]
        return <>
        <NavBar />
        <>
        <header className="mt-[4rem] md:mt-[1rem] p-8 md:p-[8rem] lg:px-[22rem] lg:py-[5rem] !pb-6 md:!pb-10">
        <img className="object-cover h-[30vh] w-[100%] md:h-[45vh]" src={post.cover} alt={post.title + " Cover Image"} />
    </header>
    <article className="px-10 md:px-[10rem] lg:px-[25rem] *:mb-3 text-lg text-justify">
        <h1 className="text-4xl text-opacity-100 uppercase">{post.title}</h1>
        <ul className="tags !gap-2 *:!font-thin !mb-6">
            {post.keywords.map((v:string, k:number) => {return <li key={k}>{v}</li>} )}
        </ul>
        {
            post.content
        }
    </article>
    <p className="text-center pt-6">
        <a className="btn text-center" href="/">← Back Home</a>
    </p>
        </>
        <Footer />
        </>
    } catch (error) {
        return <h1>
            404 error
        </h1>
    }
    
}