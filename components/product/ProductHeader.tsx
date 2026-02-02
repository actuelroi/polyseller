
"use client"

import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "../ui/button";
import { useExtend } from "@/hooks/useExtend";
import { MdOutlineCloseFullscreen } from "react-icons/md";

// Reusable category card
interface Category {
  id: number;
  title: string;
  image: string;
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="flex flex-col items-center gap-3 cursor-pointer">
    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition">
      <img src={category.image} alt={category.title} className="w-8 h-8 object-contain" />
    </div>
    <span className="text-sm font-semibold text-gray-900">{category.title}</span>
  </div>
);

// Main reusable component
export const ShopByCategory: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: "Arts & crafts",
      image: "https://cdn-icons-png.flaticon.com/512/3082/3082032.png",
    },
    {
      id: 2,
      title: "Cars & auto",
      image: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    },
    {
      id: 3,
      title: "Bags & accessories",
      image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      id: 4,
      title: "Beauty",
      image: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
    },
    {
      id: 5,
      title: "Phones & accessories",
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965300.png",
    },
    {
      id: 6,
      title: "Office & tech",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
  ];

  const { close, open, isCollapsed } = useExtend()

  return (
    <section className="w-full p-6">


      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Achetez par catégorie</h2>
          <p className="text-gray-500 mb-6 text-sm">Nous allons vous aider à trouver quelque chose</p>
        </div>

        {
          isCollapsed ? (
            <Button className="cursor-pointer" variant={'outline'} size={'icon'} onClick={() => open()}>
              <MdOutlineCloseFullscreen />
            </Button>
          ) : (
            <Button className="cursor-pointer" variant={'outline'} size={'icon'} onClick={() => close()}>
              <FiExternalLink />
            </Button>
          )
        }


      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

// Preview usage
export default function ProductHeader() {
  return (
    <div className=" bg-white flex items-start justify-center">
      <ShopByCategory />
    </div>
  );
}
