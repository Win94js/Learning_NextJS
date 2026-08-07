import { Metadata } from "next"

export const metadata: Metadata = {

    //   title: "Blog", // for template usage

    title: {
        absolute: "Blog", // for absolute usage
    },
};

export default function Blog(){
    return <h1>My Blog Page</h1>
}