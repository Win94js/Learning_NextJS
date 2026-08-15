import { StaticImageData } from "next/image"

import photo1 from "./photos/img-1.jpg";
import photo2 from "./photos/img-2.jpg";
import photo3 from "./photos/img-3.jpg";
import photo4 from "./photos/img-4.jpg";
import photo5 from "./photos/img-5.jpg";
import photo6 from "./photos/img-6.jpg";

export type WonderImage = {
    id:string,
    name: string,
    src : string | StaticImageData,
    photographer : string,
    location: string,
}

export const wondersImages : WonderImage[] = [ 
    {
        id: "1",
        name: "Royal Enfield 1",
        src : photo1,
        photographer: "Royal Enfield Company",
        location: "India",
    },
     {
        id: "2",
        name: "Royal Enfield 2",
        src : photo2,
        photographer: "Royal Enfield Company",
        location: "India",
    },
     {
        id: "3",
        name: "Royal Enfield 3",
        src : photo3,
        photographer: "Royal Enfield Company",
        location: "India",
    },
     {
        id: "4",
        name: "Royal Enfield 4",
        src : photo4,
        photographer: "Royal Enfield Company",
        location: "India",
    },
     {
        id: "5",
        name: "Royal Enfield 5",
        src : photo5,
        photographer: "Royal Enfield Company",
        location: "India",
    },
     {
        id: "6",
        name: "Royal Enfield 6",
        src : photo6,
        photographer: "Royal Enfield Company",
        location: "India",
    },
]