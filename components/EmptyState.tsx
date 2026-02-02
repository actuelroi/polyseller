import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Button } from "./ui/button";

interface EmptyProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  return (
    <div className=" h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Link
            href="/recherche"
           
          >
            <Button className="" variant={'default'}size={'lg'}>
                 continuer les achats
            </Button>
           
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;