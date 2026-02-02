"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";


const images = [
  "https://images.unsplash.com/photo-1542272604-787c3835535d",
  "https://github.com/vercel.png",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
]

export default function ProductPreview() {

  const [mainImage, setMainImage] = useState(images[0])
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <div className="flex p-2">
        <img
          src={mainImage}
          alt="Guess snakeskin shoulder bag"
          className=" object-cover aspect-square"
          height={500}
          width={500}
        />
      </div>
      <div className="flex flex-row gap-4 p-2">
        {
          images.map((image, i) => (
            <button
              key={i}
              onClick={() => setMainImage(image)}
              className={cn(
                "p-2 rounded-md",
                image === mainImage && "ring-2 ring-blue-400"
              )}

            >
              <img
                src={image}
                width={50}
                height={50}
                className={cn("aspect-square ")}
              />
            </button>
          ))
        }
      </div>
    </div>




  );
}
