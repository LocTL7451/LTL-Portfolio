"use client";

import React from "react";
import { ProjectDetail } from "../../../Interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: ProjectDetail;
  callbackSidebar: () => void;
  callbackProject: () => void;
  isSelected: boolean;
};

const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  for (const card of document.getElementsByClassName("tile")) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    (card as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
    (card as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
  }
};

function ProjectTile(project: Props) {
  return (
    <Link
      onClick={() => {
        project.callbackSidebar();
        project.callbackProject();
      }}
      className=""
      href={`/projects/${project.project.identifier}`}
    >
      <div
        onMouseMove={(e) => {
          handleOnMouseMove(e);
        }}
        className="w-auto max-w-[30rem] group rounded-lg relative bg-neutral-800/50 py-3  hover:bg-neutral-800 transition-all duration-300 h-fit  cursor-pointer px-[0.35rem] md:px-2 my-4 md:my-2 mx-4 md:mx-4 tile    flex justify-center items-center z-[3] hover:before:opacity-100"
      >
        <div className="tile-border hover:opacity-100 mx-4"></div>
        <div className="rounded-lg  bg-neutral-900/80 z-[2] flex overflow-hidden items-end relative w-full max-w-[29rem]  aspect-[70/50]">
          <Image
            fill
            placeholder="blur"
            src={project.project.icon.src}
            alt={project.project.icon.alt}
            sizes="100%"
            priority
            className={`${
              project.isSelected ? "" : "opacity-60 saturate-50 brightness-50"
            }  transition-all group-hover:saturate-100 group-hover:brightness-100`}
          />
          <h1
            className={`text-2xl lg:text-4xl font-bold ${
              project.isSelected ? "text-zinc-100 " : "text-zinc-400"
            } mb-10 ml-10 absolute group-hover:text-zinc-100`}
          >
            {project.project.title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default ProjectTile;
