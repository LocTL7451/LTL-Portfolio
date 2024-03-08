"use client";

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "../../../information/projects";
import AnimatedVerticalPage from "../../AnimatedVerticalPage";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { ProjectDetail } from "../../../Interfaces";
import Slider from "./_components/Slider";

function ProjectsPage({ params }: { params: { projectName: string } }) {
  const [project, setProject] = useState<ProjectDetail | undefined>(
    projects.find((project) => project.identifier === params.projectName)
  );
  const router = useRouter();

  useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  });

  return (
    <AnimatedVerticalPage>
      <div
        className={`mt-[4rem] lg:mt-[2rem] w-full  text-zinc-200 flex flex-col items-center justify-center  `}
      >
        <div className="mb-4 px-4">
          <h1 className="text-5xl font-bold">{project?.title}</h1>
          <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
        </div>
        <Slider project={project} />

        <article className="flex items-center mt-8  mx-8 md:mx-12 lg:mx-24 text-xl">
          {project?.description}
        </article>
        <section>
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex flex-row items-center justify-center space-x-4">
              {project?.techStack.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 my-8">
              {project?.links.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.link}
                    target="_blank"
                    className="flex flex-row items-center justify-center space-x-2"
                  >
                    <p>{link.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedVerticalPage>
  );
}

export default ProjectsPage;
