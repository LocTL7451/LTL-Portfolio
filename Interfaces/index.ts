import { ReactNode } from "react";
import { ImageProps } from "next/image";

export interface ProjectDetail {
  title: string;
  identifier: string;
  description: string;
  icon: ImageProps;
  images: ImageProps[];
  techStack: ReactNode[];
  links: {
    name: string;
    icon: ReactNode;
    link: string;
  }[];
}
