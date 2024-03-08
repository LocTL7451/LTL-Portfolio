"use client";

import React from "react";
import AnimatedVerticalPage from "../AnimatedVerticalPage";

function page() {
  return (
    <AnimatedVerticalPage>
      <div className={`h-fit `}>
        <div
          className={`m-[2rem] mt-[4rem]  md:mx-[7rem]  md:mt-[5rem] text-zinc-200  `}
        >
          <div className="w-fit mb-4">
            <h1 className="text-5xl font-bold">Projects</h1>
            <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
          </div>
          <section>
            Select any project from the sidebar to view more details about the project and the technology used.
          </section>
        </div>
      </div>
    </AnimatedVerticalPage>
  );
}

export default page;
