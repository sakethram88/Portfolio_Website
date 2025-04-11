//import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Working as a Research Assistant at Montclair State University, NJ, USA.</li>
            <li>Graduated with a Master&apos;s degree in Computer Science from Montclair State University.</li>
          </ul>
          {/*<div className="grid grid-cols-2 gap-4">
            <Image src="https://source.unsplash.com/featured/?research,university" alt="RA work" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
            <Image src="https://source.unsplash.com/featured/?graduation,students" alt="Graduation" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
          </div>*/}
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Completed the Fellowship Diploma from the Associated Board of the Royal Schools of Music.</li>
            <li>Worked as a Graduate Assistant at Montclair State University.</li>
            <li>Received the &quot;UNIQUE PERSONALITY SPECIAL PRIZE&quot; and &quot;ABSOLUTE FIRST PRIZE&quot; at the Vivaldi International Music Competition.</li>
            <li>Won First Prize at the Charleston International Music Competition.</li>
          </ul>
          {/*<div className="grid grid-cols-2 gap-4">
            <Image src="https://source.unsplash.com/featured/?piano,music" alt="ABRSM Fellowship" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
            <Image src="https://source.unsplash.com/featured/?award,medal" alt="Competition awards" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
          </div>*/}
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Graduated with a Bachelor&apos;s degree in Technology in Information Technology from Jawaharlal Nehru Technological University, Hyderabad, India.</li>
          </ul>
          {/*<div className="grid grid-cols-2 gap-4">
            <Image src="https://source.unsplash.com/featured/?graduation,technology" alt="BTech Graduation" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
          </div>*/}
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Worked as a Research Assistant at Udaan, focusing on real-time data analytics and applications of Artificial Intelligence.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Completed Intermediate studies at Narayana Junior College, Hyderabad, with a score of 96.4%.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Was Awarded Licentiate of Trinity College London Diploma in Piano Performance.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold mb-8 list-disc list-inside space-y-4">
            <li>Was Awarded Associate of Trinity College London Diploma in Piano Performance.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
