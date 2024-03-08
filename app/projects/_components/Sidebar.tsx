"use client";

import { projects } from "../../../information/projects";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ProjectTile from "./projectTile";
import { ProjectDetail } from "../../../Interfaces";

function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)
  
  return (
    <>
      <div
        className={`absolute lg:hidden px-8 py-4 flex justify-start items-center text-zinc-100 cursor-pointer transition-all hover:scale-[1.04] duration-300`}
        onClick={() => {
          setSideBarOpen(true);
        }}
      >
        <span className="text-lg font-semibold pr-4">Open Menu</span>
        <ArrowRightIcon className="w-6 h-6 font-semibold " />
      </div>
      <aside
        className={`w-fit max-w-[35rem] h-[90dvh] scrollbar-thin z-[2] pb-8  scrollbar-track-zinc-700 overflow-y-auto overflow-x-hidden tiles rounded-lg fixed lg:relative  ${
          sideBarOpen ? "left-0 right-0" : "-translate-x-full lg:-translate-x-0"
        } transition-all w-full backdrop-blur-lg`}
      >
        <div
          className="lg:hidden px-8 py-4 flex justify-start items-center text-zinc-100 cursor-pointer transition-all hover:scale-[1.04]"
          onClick={() => {
            setSideBarOpen(false);
          }}
        >
          <ArrowLeftIcon className="w-6 h-6 font-semibold " />
          <span className="text-lg font-semibold pl-4">Close Menu</span>
        </div>
        {projects.map((project: ProjectDetail) => {
          return (
            <ProjectTile
              callbackSidebar={() => {
                setSideBarOpen(false);
              }}
              callbackProject={() => {
                setSelectedProject(project);
              }}
              isSelected={selectedProject?.identifier === project.identifier}
              key={project.identifier}
              project={project}
            />
          );
        })}
      </aside>
    </>
  );
}

export default Sidebar;
