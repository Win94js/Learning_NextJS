"use client"
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
        return (
            <div>
                <h2>Review Not Found</h2>
                <p>Could not find for {reviewId} requested source {productId}.</p>
            </div>
        )
}