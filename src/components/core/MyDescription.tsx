"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function MyDescription() {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-3xl p-6 border flex gap-4 xl:gap-14 items-center justify-between  bg-gradient-to-r from-slate-900 to-slate-800">
      <CardItem translateZ="90" className="">
          <Image
            src="/assets/images/myimage.jpg"
            height="1000"
            width="1000"
            className="h-32 w-32 md:h-56 md:w-56 object-cover rounded-tl-xl md:rounded-tl-3xl rounded-br-xl md:rounded-br-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="max-w-52 h-fullflex flex-col justify-between">
        <CardItem
          translateZ="50"
          className=" text-[#868484] text-sm sm:text-base font-medium font-edu-sa"
        >
         WEB DEVELOPER
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 max-w-sm mt-4 dark:text-neutral-300  font-sans text-xl sm:text-2xl xl:text-4xl font-medium"
        >
          Harsh Raj
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="max-w-sm mt-4 text-[#817e7e] text-xs sm:text-base font-medium"
        >
           Slow for perfection , fast for deadline
        </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
