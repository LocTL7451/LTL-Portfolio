import { ImageProps } from "next/image";
import icon from "../public/images/LTL Tasking/LTL_Logo.png"
import backend from "../public/images/LTL Tasking/LTL_Backend.png";
import dashboard from "../public/images/LTL Tasking/LTL_Dashboard.png"; 

export const LTLTaskingImages: ImageProps[] = [
  {
    src: backend,
    alt: "LTL Backend",
  },
  {
    src: dashboard,
    alt: "LTL Dashboard",
  },

];

export const LTLIcon: ImageProps = {
  src: icon,
  alt: "LTL Icon",
};
