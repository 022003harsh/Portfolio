"use client";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function ResumeSection() {
  const imageUrl =
    "/assets/images/resumepic.jpg";
  return (
        <a href="/assets/Harsh'S resume.pdf" download="my_resume.pdf" className="h-full relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl font-edu-sa">Resume</p>
        <p className="font-normal text-sm">Click to Download</p>
      </DirectionAwareHover>
        </a>
  );
}
