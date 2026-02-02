'use client'

import React from "react";

// Reusable pill component
type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        `whitespace-nowrap rounded-full border px-5 py-2 text-sm transition ` +
        (active
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-300 bg-white text-gray-700 hover:border-gray-500")
      }
    >
      {label}
    </button>
  );
};

// Navigation bar
const DetailHeader: React.FC = () => {
  const categories = [
    "Accueil",
    "Mode",
    "Voyage",
    "Maison",
    "Wellness",
    "Enfant",
    "Chaussures",
    "Beauté",
    "Sport",
    "Vin et Epicerie",
    "Loisir",
    "Rosedeals",
  ];

  return (
    <div className="w-full overflow-x-auto hide-scrollbar">
      <div className="flex gap-3 px-4 py-3">
        {categories.map((cat, index) => (
          <Pill key={cat} label={cat} active={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default DetailHeader;
