import {
  SiReact,
  SiFastapi,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiDevpost,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { RxEnter } from "react-icons/rx";
import { ProjectDetail } from "../Interfaces";
import {GTImages, GTIcon} from "../MappingConfigs/GTImgExport"
const techStackIcon = "min-w-[20px] min-h-[20px] w-10 h-10";

export const tools: ProjectDetail[] = [
  {
    title: "Green Transportation",
    identifier: "greentransportation",
    icon: GTIcon,
    description: "Green Transportations is a project I made in collaboration with 3 other great minds during my time at University. The goal of this project was to create and optimise travel routes in an effort to reduce nation-wide greenhouse gas emissions from its' primary contributor, the trucking sector. Green Transportations allows companies to register their fleet vehicles within the application, of which we make calls to a public API to grab all the data about the registered vehicles, allowing us to create a profile to utilise when finding routes. As far as route calculation goes, we take a number of metrics into consideration during the calculation phase, which includes: Best path, fastest path, least traffic, least stop-and-starts, least traffic lights, land elevation, and the truck's emission statistics. All of these factors allow us to create an optimised route of travel, regarding both time as well as emission!",
    images: GTImages,
    techStack: [
      <SiReact className={`${techStackIcon}`} color={"#61DBFB"} />,
      <SiTypescript className={`${techStackIcon}`} color={"#3780ed"} />,
      <SiHtml5 className={`${techStackIcon}`} color={"#ed5537"} />,
      <SiCss3 className={`${techStackIcon}`} color={"#3789ed"} />,
      <SiJavascript className={`${techStackIcon}`} color={"#edc937"} />,
    ],
    links: [],
  },
];
