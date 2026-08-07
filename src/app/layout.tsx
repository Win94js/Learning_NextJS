import { ChildProcess } from "child_process";
import type  {Metadata} from "next";

export const metadata: Metadata = {
    title: "Next.js",
    description: "Next Js Application Building."
}

export default function AuthLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return (
        
        <html lang="en">
        {/* ဒီ <head> နေရာမှာပါသမျှတွေက Metadata ကတာဝန်ယူပေးတယ် */}
        <body>
            
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