"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Linkedin",
    image: "FaLinkedinIn",
    link: "https://linkedin.com/in/harsh-raj-898340217"
  },
  {
    id: 2,
    name: "Github",
    image: "FaGithub",
    link: "https://github.com/022003harsh"
  },
  {
    id: 3,
    name: "Twitter",
    image: "FaXTwitter",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },
  {
    id: 4,
    name: "Instagram",
    image: "FaInstagram",
    link: "https://www.instagram.com/harsh_rj002/"
  },
];

export function NavbarSocials() {
  return (
    <div className="flex flex-row mr-3 justify-center items-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}