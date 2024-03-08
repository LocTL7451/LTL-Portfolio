import { ImageProps } from "next/image";
import icon from "../public/images/GT/GT_LOGO.jpg";
import backend from "../public/images/GT/GT_Backend.png";
import dashboard from "../public/images/GT/GT_Dashboard.png";
import map from "../public/images/GT/GT_MAP.png";
import report from "../public/images/GT/GT_REPORT.png";

export const GTImages: ImageProps[] = [
  {
    src: backend,
    alt: "Green Transportation Backend Diagram",
  },
  {
    src: dashboard,
    alt: "Green Transportation Dashboard",
  },
  {
    src: map,
    alt: "Green Transportation Map Feature",
  },
  {
    src: report,
    alt: "Green Transportation Report Feature",
  },
];

export const GTIcon: ImageProps = {
  src: icon,
  alt: "Green Transportation Icon",
};
