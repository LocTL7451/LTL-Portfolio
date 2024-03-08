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
import { ProjectDetail } from "../Interfaces";
import {GTImages, GTIcon} from "./GTImgExport"
import {LTLTaskingImages, LTLIcon} from "./LTLTaskingExport"

const techStackIcon = "min-w-[20px] min-h-[20px] w-10 h-10";

export const projects: ProjectDetail[] = [

  {
      title: "Green Transportation",
      identifier: "gt",
      icon: GTIcon,
      description: "Green Transportations is a project I made in collaboration with 3 other great minds during my time at University. The goal of this project was to create and optimise travel routes in an effort to reduce nation-wide greenhouse gas emissions from its' primary contributor, the trucking sector. Green Transportations allows companies to register their fleet vehicles within the application, of which we make calls to a public API to grab all the data about the registered vehicles, allowing us to create a profile to utilise when finding routes. As far as route calculation goes, we take a number of metrics into consideration during the calculation phase, which includes: Best path, fastest path, least traffic, least stop-and-starts, least traffic lights, land elevation, and the truck's emission statistics. All of these factors allow us to create an optimised route of travel, regarding both time as well as emission! Green transportations was implemented using a standard MERN (Mongo|Express|React|NodeJS) stack, with an emphasis on clear, highly scalable code.",
      images: GTImages,
      techStack: [
        <SiReact className={`${techStackIcon}`} color={"#61DBFB"} />,
        <SiTypescript className={`${techStackIcon}`} color={"#3780ed"} />,
        <SiHtml5 className={`${techStackIcon}`} color={"#ed5537"} />,
        <SiCss3 className={`${techStackIcon}`} color={"#3789ed"} />,
        <SiJavascript className={`${techStackIcon}`} color={"#edc937"} />,
      ],
      links: [ 
        {name: "Github",
        icon: <SiGithub/>,
        link: "https://github.com/GreenTransportations/application",
        },
      ]
  },
  {
    title: "LTL Tasking",
    identifier: "ltl",
    icon: LTLIcon,
    description: "LTL Tasking is a lightweight, minimalist approach to a personal organiser. Heavily inspired by the Kanban Board 'Meta', LTL Tasking aimed to allow users to create simple notes for day to day tasks, helping them achieve the small wins in life. LTL Tasking was also an opportunity for me to explore some technologies I had never touched before, including AppWrite for cloud storage, and OpenAI4 for personalised daily summaries.",
    images: LTLTaskingImages,
    techStack: [
      <SiReact className={`${techStackIcon}`} color={"#61DBFB"} />,
      <SiTypescript className={`${techStackIcon}`} color={"#3780ed"} />,
      <SiHtml5 className={`${techStackIcon}`} color={"#ed5537"} />,
      <SiCss3 className={`${techStackIcon}`} color={"#3789ed"} />,
      <SiJavascript className={`${techStackIcon}`} color={"#edc937"} />,
    ],
    links: [ 
      {name: "Github",
      icon: <SiGithub/>,
      link: "https://github.com/LocTL7451/LTL-Tasking",
      },
    ]
},
];
