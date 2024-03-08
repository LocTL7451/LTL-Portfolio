"use client";
import { useRef, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ComputerIcon from "../Illustrations/ComputerIcon";
import Tilt from "react-parallax-tilt";
import { Fade, Slide } from "react-awesome-reveal";
import {
  frontEndSkills,
  backEndSkills,
  languages,
} from "../information/skills";
import {
  CommandLineIcon,
  WrenchIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Typed from "typed.js";
import AnimatedHorizontalPage from "./AnimatedHorizontalPage";
import ComputerPerson from "../Illustrations/ComputerPerson";
import PersonEmail from "../Illustrations/PersonEmail";

export default function Page() {
  const typeWriterRef = useRef(null);

  const skills = [
    {
      name: "Frontend",
      icon: <CodeBracketIcon className="w-10 h-10 text-orange-800" />,
      skills: frontEndSkills,
    },
    {
      name: "Backend",
      icon: <WrenchIcon className="w-10 h-10 text-orange-800" />,
      skills: backEndSkills,
    },
    {
      name: "Languages",
      icon: <CommandLineIcon className="w-10 h-10 text-orange-800" />,
      skills: languages,
    },
  ];

  useEffect(() => {
    const options = {
      strings: [
        "I am a Fullstack Developer",
        "I am a Software Engineer",
        "I am a Volleyball Player",
        "I am a Nerd Culture Enthusiast",
      ],
      typeSpeed: 75,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(typeWriterRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <AnimatedHorizontalPage>
      <div id="landing" className="flex justify-center items-center h-[60rem] ">
        <div className="w-full h-[20rem] p-4 m-4 md:grid md:grid-cols-2 md:grid-rows-2">
          <div className=" items-center flex justify-center md:justify-end">
            <div>
              <Fade triggerOnce delay={300}>
                <h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  Hiya! I'm Loc Lien :)
                </h1>
              </Fade>
              <div>
                <div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-2 lg:py-4 lg:justify-end  overflow-hidden h-[4rem] ">
                  <span id="typed-parent" className="inline-block">
                    <span ref={typeWriterRef}></span>
                  </span>
                </div>
              </div>

              <div className="w-full md:w-[18rem] lg:w-[25rem] h-[50px]  relative ">
                <Slide
                  triggerOnce
                  className="absolute left-0 top-0"
                  direction="left"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
                <Slide
                  triggerOnce
                  className="absolute right-0 bottom-0"
                  direction="right"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-l from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start row-span-2   relative">
            <Fade
              triggerOnce
              className="absolute bottom-0 hidden md:block  md:w-[350px] lg:w-[400px] xl:w-[500px] "
            >
              <Tilt
                reset={false}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltReverse={true}
                tiltMaxAngleY={10}
              >
                <ComputerIcon />
              </Tilt>
            </Fade>
          </div>

          <div className="flex items-center justify-center lg:justify-end space-x-6 mt-10  h-[8rem] mr-10">
            <Fade triggerOnce cascade damping={0.1}>
              <a
                className="cursor-pointer"
                href="https://github.com/LocTL7451"
                target={"_blank"}
              >
                <AiFillGithub className="w-14 h-14 text-zinc-200 hover:text-zinc-400 transition-all " />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/loc-lien/"
                target={"_blank"}
              >
                <AiFillLinkedin className="w-14 h-14  transition-all duration-200 text-zinc-200  hover:text-zinc-400 " />
              </a>
              <a href="/contact" className="group">
                <p className="text-zinc-200 text-xl  lg:text-2xl font-semibold hover:text-zinc-400  transition-all duration-[600ms] border-[3px] border-zinc-400 px-4 py-3 rounded-lg">
                  Contact Me
                </p>
                <div className="mt-2 space-y-2 h-0 ">
                  <div className="h-[2px] bg-zinc-400 m-auto scale-0 transition-all origin-left duration-[200ms] group-hover:scale-100"></div>
                  <div className="h-[2px] bg-zinc-400 w-3/4 m-auto scale-0 transition-all origin-right duration-[400ms] group-hover:scale-100"></div>
                  <div className="h-[2px] bg-zinc-400 w-1/2 m-auto scale-0 transition-all origin-left duration-[600ms] group-hover:scale-100"></div>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>

      <div
        id="portfolio"
        className="flex justify-center items-center h-[60rem] "
      >
        <div className="w-full h-[20rem] p-4 m-4 md:grid md:grid-cols-2 md:grid-rows-2">
          <div className=" items-center flex justify-center md:justify-end">
            <div>
              <Fade triggerOnce delay={300}>
                <h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  Take a look at my portfolio.
                </h1>
              </Fade>
              <Fade triggerOnce delay={150}>
                <div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-4 lg:justify-end  h-fit ">
                  <span>
                    I love working on projects to further develop my skillset.
                  </span>
                </div>
              </Fade>

              <div className="w-full md:w-[18rem] lg:w-[25rem] h-[50px]  relative ">
                <Slide
                  triggerOnce
                  className="absolute left-0 top-0"
                  direction="left"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
                <Slide
                  triggerOnce
                  className="absolute right-0 bottom-0"
                  direction="right"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-l from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start row-span-2  relative">
            <Fade
              triggerOnce
              className="absolute bottom-0 hidden md:block  md:w-[350px] lg:w-[400px] xl:w-[600px] transition-all "
            >
              <Tilt
                reset={false}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltReverse={true}
                tiltMaxAngleY={10}
              >
                <ComputerPerson />
              </Tilt>
            </Fade>
          </div>

          <div className="flex items-center justify-center lg:justify-end space-x-6 mt-16 h-[8rem] mr-10">
            <Fade triggerOnce>
              <a href="/projects" className="group">
                <p className="text-zinc-200 text-xl  lg:text-2xl font-semibold hover:text-zinc-400  transition-all duration-[600ms] border-[3px] border-zinc-400 px-5 py-3 rounded-lg">
                  Sneak Peak Into Some of My Work
                </p>
                <div className="mt-2 space-y-2 h-0 ">
                  <div className="h-[2px] bg-zinc-400 m-auto scale-0 transition-all origin-left duration-[200ms] group-hover:scale-100"></div>
                  <div className="h-[2px] bg-zinc-400 w-3/4 m-auto scale-0 transition-all origin-right duration-[400ms] group-hover:scale-100"></div>
                  <div className="h-[2px] bg-zinc-400 w-1/2 m-auto scale-0 transition-all origin-left duration-[600ms] group-hover:scale-100"></div>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>

      <div id="skills" className="flex justify-center items-center h-[60rem] ">
        <div className="w-full h-[40rem] p-4 m-4 md:grid md:grid-cols-2 md:grid-rows-2">
          <div className=" items-center flex justify-center md:justify-end row-span-2">
            <div>
              <Fade triggerOnce delay={300}>
                <h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  Here is a snapshot of my current skill-set 
                </h1>
              </Fade>
              <Fade triggerOnce delay={150}>
                <div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-4 lg:justify-end  h-fit ">
                  <span>
                    I am always looking for new ways to improve my code knowledge, quality and ability :)
                  </span>
                </div>
              </Fade>

              <div className="w-full md:w-[18rem] lg:w-[25rem] h-[50px]  relative ">
                <Slide
                  triggerOnce
                  className="absolute left-0 top-0"
                  direction="left"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
                <Slide
                  triggerOnce
                  className="absolute right-0 bottom-0"
                  direction="right"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-l from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
              </div>
            </div>
          </div>

          <div className=" row-span-2  relative flex flex-col p-6 md:p-12 ">
            {skills.map((skill, index) => {
              return (
                <div key={`skill${index}`} className="">
                  <div className="flex items-center space-x-4 justify-center">
                    {skill.icon}
                    <h1 className="text-zinc-200 text-3xl font-bold">
                      {skill.name}
                    </h1>
                  </div>
                  <div className="flex flex-row flex-wrap m-8">
                    {skill.skills.map((skill, index) => {
                      return (
                        <Tilt
                          key={`skills${index}`}
                          reset={false}
                          transitionSpeed={2000}
                          tiltMaxAngleX={20}
                          tiltReverse={true}
                          tiltMaxAngleY={20}
                          className="text-zinc-400 text-sm lg:text-lg px-2 py-2 lg:px-4 font-semibold rounded-lg bg-zinc-800 m-2 shadow-black shadow-md"
                        >
                          <span className=" ">{skill}</span>
                        </Tilt>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        id="portfolio"
        className="flex justify-center items-center h-[60rem] "
      >
        <div className="w-full h-[20rem] p-4 m-4 md:grid md:grid-cols-2 md:grid-rows-2">
          <div className=" items-center flex justify-center md:justify-end">
            <div>
              <Fade triggerOnce delay={300}>
                <h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  Send me a message.
                </h1>
              </Fade>
              <Fade triggerOnce delay={150}>
                <div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-4 lg:justify-end  h-fit ">
                  <span>
                    I'm always looking for more opportunities to make connections and learn off others.
                  </span>
                </div>
              </Fade>

              <div className="w-full md:w-[18rem] lg:w-[25rem] h-[50px]  relative ">
                <Slide
                  triggerOnce
                  className="absolute left-0 top-0"
                  direction="left"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
                <Slide
                  triggerOnce
                  className="absolute right-0 bottom-0"
                  direction="right"
                >
                  <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-l from-orange-600 via-orange-800 w-[17rem] md:w-[13rem] lg:w-[17rem] " />
                </Slide>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start row-span-2  relative">
            <Fade
              triggerOnce
              className="absolute bottom-0 hidden md:block  md:w-[350px] lg:w-[400px] xl:w-[600px] transition-all "
            >
              <Tilt
                reset={false}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltReverse={true}
                tiltMaxAngleY={10}
              >
                <PersonEmail />
              </Tilt>
            </Fade>
          </div>

          <div className="flex items-center justify-center lg:justify-end space-x-6 mt-16 h-[8rem] mr-10">
            <Fade triggerOnce>
              <a href="/contact" className="group">
                <p className="text-zinc-200 text-xl  lg:text-2xl font-semibold hover:text-zinc-400  transition-all duration-[600ms] border-[3px] border-zinc-400 px-5 py-3 rounded-lg">
                  Contact form
                </p>
                <div className=" mt-2 space-y-2 h-0 ">
                  <div className="h-[2px] bg-zinc-400 m-auto scale-0 transition-all origin-left duration-[200ms] group-hover:scale-100"></div>
                  <div className="h-[2px] bg-zinc-400 w-3/4 m-auto scale-0 transition-all origin-right duration-[400ms] group-hover:scale-100"></div>
                  <div className="h-[2px] bg-zinc-400 w-1/2 m-auto scale-0 transition-all origin-left duration-[600ms] group-hover:scale-100"></div>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </AnimatedHorizontalPage>
  );
}
