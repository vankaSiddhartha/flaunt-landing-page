"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h1
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            AI Try-On Feature
          </h1>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Virtually try on clothes and see how they fit before you buy!
          </p>
        </div>
        <Image
          src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28895562/2024/4/12/1ca76329-5a69-4ae9-b4dd-ed2e034d13091712925829431EmbroideredStraightKurtaTrousersWithMulmalDupatta2.jpg"
          width={200}
          height={200}
          alt="AI try-on demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h1
          className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Swipe to Discover
        </h1>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Browse and swipe through outfits just like on Tinder!
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h1
            className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            All-in-One Super Fashion App
          </h1>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Discover collections from Nykaa, Myntra, and all your favorite fashion giants in one place!
          </p>
        </div>
        <Image
          src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7393506/2020/10/10/598c5773-4917-495f-b018-695a75b1b83e1602269372244TaaviWomenBlackMaroonKalamkariHandBlockPrintEthnicSustainabl2.jpg"
          width={200}
          height={200}
          alt="clothing demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 min-h-[300px]">
        <div className="max-w-xs">
          <h1
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Share Your Favorites
          </h1>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Easily share your favorite outfits with friends and get their opinions!
          </p>
        </div>
      </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h1
          className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Personalized Recommendations
        </h1>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                      Get outfit suggestions tailored just for you based on your style preferences!

        </p>
      </WobbleCard>
    </div>)
  );
}
