import { Metadata } from "next"

export const metadata: Metadata = {

    //   title: "Blog", // for template usage

    title: {
        absolute: "Blog", // for absolute usage
    },
};

export default async function Blog(){
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("Intentional Delay")
        }, 2000)
    })
    return <h1>My Blog Page</h1>
}