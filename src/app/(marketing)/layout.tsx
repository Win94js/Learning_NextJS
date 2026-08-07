import { ChildProcess } from "child_process";
import type  {Metadata} from "next";

export const metadata: Metadata = {
    title: "Next.js",
    description: "Next Js Application Building."
}

export default function MarketingLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return (
        
        <html lang="en">
        {/* ဒီ <head> နေရာမှာပါသမျှတွေက Metadata ကတာဝန်ယူပေးတယ် */}
        <body>
            <header style={{
                backgroundColor:"lightblue",
                padding:"1rem"
            }}>
                <p>
                    Header
                </p>
            </header>
            {children}
            <footer
            style={{
                backgroundColor:"ghostwhite",
                padding:"1rem"
            }}>
                <p>Footer</p>
            </footer>

        </body>
        </html>
    )
}