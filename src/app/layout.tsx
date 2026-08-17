import "./globals.css";
import type  {Metadata} from "next";
import { ErrorWrapper } from "./error-wrapper";


export const metadata: Metadata = {
    title: {
        default:"Next JS Learning - From Codevolution ",
        template:"%s | Next JS step Learning",
        absolute:"",
    },
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

        <header style={{
            backgroundColor:"lightblue",
            padding: "1rem",
        }}>
            
            <p>Header</p>
        </header>
            <ErrorWrapper>
                {children}
            </ErrorWrapper>
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