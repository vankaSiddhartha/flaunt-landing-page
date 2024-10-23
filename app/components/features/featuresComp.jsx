"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your our flaunt.
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
         <span className="font-bold text-neutral-700 dark:text-neutral-200">
  Flaunt your style, because the first rule of Flaunt Club is to show off your unique fashion!
</span>{" "}
Easily curate your wardrobe, create stunning outfits, and share your looks with friends. Want to save your favorite styles for later? No problem. Flaunt is here to help you express every fashionable thought!

          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "",
    title: ".",
    src: "https://res.cloudinary.com/dsiw4qy26/image/upload/v1729622251/b1_wrcx22.webp",
    content: <DummyContent />,
  },

  {
    category: "",
    title: "",
    src: "https://res.cloudinary.com/dsiw4qy26/image/upload/v1729622979/fi_ypycyl.webp",
    content: <DummyContent />,
  },


  {
    category: "",
    title: "",
    src: "https://res.cloudinary.com/dsiw4qy26/image/upload/v1729623826/im4_bs1clk.jpg",
    content: <DummyContent />,
  },

];
