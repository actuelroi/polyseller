"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1542272604-787c3835535d",
  "https://github.com/vercel.png",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
]

const ProductGallery = () => {
  const [mainImage, setMainImage] = useState(images[0])

 

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`relative w-22 h-22 border rounded-md overflow-hidden
              
            `}
          >
            <Image
              src={img}
              alt={`Product thumbnail `}
              width={150}
              height={150}
              className="object-contain"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-full  order-1 md:order-2 border rounded-md hover:scale-105 transition cursor-pointer">
        <Image
          src={mainImage}
          alt={"Product image"}
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
export default ProductGallery
