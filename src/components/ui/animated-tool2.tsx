"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip2 = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="-mr-2 md:-mr-3 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -bottom-12 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-slate-900 z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[30%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-5 w-[50%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-semibold text-white relative z-30 text-xs">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="object-cover !m-0 !p-0 object-top rounded-full h-6 md:h-8 w-6 md:w-8 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500 bg-slate-800 flex items-center justify-center"
          >
          {item.image === "FaLinkedinIn" && <FaLinkedinIn className="text-md"/>}
          {item.image === "FaGithub" && <FaGithub className="text-md"/>}
          {item.image === "FaInstagram" && <FaInstagram className="text-md"/>}
          {item.image === "FaXTwitter" && <FaXTwitter className="text-md"/>}
          {item.image === "TbBrandNextjs" && <TbBrandNextjs className="text-md"/>} 
          {item.image === "GrReactjs" && <GrReactjs className="text-md"/>} 
          {item.image === "SiTailwindcss" && <SiTailwindcss className="text-md"/>} 
          {item.image === "SiMongodb" && <SiMongodb className="text-md"/>} 
          {item.image === "SiExpress" && <SiExpress className="text-md"/>} 
          {item.image === "SiTypescript" && <SiTypescript className="text-md"/>} 
          {item.image === "SiPrisma" && <SiPrisma className="text-md"/>} 
          {item.image === "FaNodeJs" && <FaNodeJs className="text-md"/>} 
          {item.image === "TbBrandFramerMotion" && <TbBrandFramerMotion className="text-md"/>} 
          {item.image === "SiRedux" && <SiRedux className="text-md"/>} 
          </div>
        </div>
      ))}
    </>
  );
};

