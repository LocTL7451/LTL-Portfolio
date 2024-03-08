"use client";

import React from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

type sideBarProps = {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideBar(props: sideBarProps) {
  const { sideBarOpen, setSideBarOpen } = props;

  return (
    <div
      className={`fixed  bg-zinc-100  top-0 bottom-0 right-0 left-0  ${
        sideBarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300 z-40`}
    >
      <div className=" h-[6rem] grid grid-cols-4">
        <div className="flex items-center justify-center col-start-4">
          <XMarkIcon
            onClick={() => setSideBarOpen(false)}
            className=" w-10 font-extrabold hover:text-blue-900 hover:w-11 transition-all duration-150"
          />
        </div>
      </div>
      <div className="h-[40rem] flex flex-col justify-center items-center text-3xl font-bold space-y-8">
        <Link
          onClick={() => setSideBarOpen(false)}
          className="hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
          href={"/"}
        >
          <p>HOME</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>

        <Link
          onClick={() => setSideBarOpen(false)}
          className="hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
          href={"/projects"}
        >
          <p>PROJECTS</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>

        <Link
          onClick={() => setSideBarOpen(false)}
          className=" hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
          href={"/contact"}
        >
          <p>CONTACT ME</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
