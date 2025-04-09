"use client";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Data",
      className: "font-mono"
    },
    {
      text: "Engineer.",
      className: "font-mono text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
