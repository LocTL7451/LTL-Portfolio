"use client";
import Link from "next/link";
import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SideBar from "./sidebar";
function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`bg-zinc-900  bg-opacity-70 h-[6rem] sticky top-0 left-0 right-0 grid grid-cols-4 text-zinc-200 z-40 ${
          sideBarOpen ? "opacity-0 " : ""
        }`}
      >
        <Link
          href={"/"}
          id="nav-logo"
          className="ml-[2rem] md:ml-[7rem] my-8 h-fit text-3xl font-extrabold flex group cursor-pointer "
        >
          <div className="md:hidden">LL</div>
          <div className="hidden md:flex">
            <p>L</p>
            {["o", "c"].map((letter, index) => {
              return (
                <p
                  key={letter}
                  className={`scale-0  group-hover:scale-100 origin-bottom`}
                  style={{ transition: `${200 + 200 * index}ms` }}
                >
                  {letter}
                </p>
              );
            })}
          </div>
          <div className="hidden md:flex transition-all duration-1000 group-hover:duration-700 -translate-x-2/3 group-hover:-translate-x-0 group-hover:mx-2">
            <p>L</p>
            {["i", "e", "n"].map((letter, index) => {
              return (
                <p
                  key={letter}
                  className={`scale-0  group-hover:scale-100 origin-bottom `}
                  style={{ transition: `${200 + 200 * index}ms ` }}
                >
                  {letter}
                </p>
              );
            })}
          </div>
        </Link>
        <div className="hidden col-span-3 md:flex items-center justify-end space-x-4 lg:space-x-6 mr-[4rem] font-semibold text-lg">
          <Link
            className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/"}
          >
            <p>HOME</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>

          <Link
            className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/projects"}
          >
            <p>PROJECTS</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>

          <Link
            className=" hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/contact"}
          >
            <p>CONTACT ME</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
        <div className="md:hidden col-start-4 flex items-center justify-center">
          <Bars3BottomLeftIcon
            onClick={() => setSideBarOpen(true)}
            className="w-8  hover:w-9 text-zinc-400 hover:text-zinc-300 transition-all duration-150"
          />
        </div>
      </nav>
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
    </>
  );
}

export default Navbar;
``;
