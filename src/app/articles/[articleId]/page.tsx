"use client"
import Link from "next/link"
import { use } from "react";



// using use()function for instead use of async in server side, use can use in client side
export default function NewsArticle({params,searchParams}:{
    params: Promise<{articleId: string}>;
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
}){
    const {articleId} = use(params);
    const {lang="en"} = use(searchParams);
    return <div>
        <h1>News Article {articleId}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>


        </div>
    </div>
}


// using  async await in server side
// export default async function NewsArticle({params,searchParams}:{
//     params: Promise<{articleId: string}>;
//     searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
// }){
//     const {articleId} = await params; // instead use use()function
//     const {lang="en"} = await searchParams; // instead use ues()function
//     return <div>
//         <h1>News Article {articleId}</h1>
//         <p>Reading in {lang}</p>

//         <div>
//             <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//             <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//             <Link href={`/articles/${articleId}?lang=fr`}>French</Link>


//         </div>
//     </div>
// }