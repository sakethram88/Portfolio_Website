import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
/*import Image from "next/image";*/

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/saketh-ram-josyabhatla-4348801a6/",
      target: "_blank", // Open in a new tab
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:sakethram48@gmail.com",
      target: "_blank", // Open in a new tab
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/sakethram88/",
      target: "_blank", // Open in a new tab
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/sakethram88?tab=overview&from=2025-04-01&to=2025-04-08",
      target: "_blank", // Open in a new tab
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
