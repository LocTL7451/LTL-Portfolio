"use client";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import emailjs from "@emailjs/browser";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import emailDark from "../../public/emailDarkMode.svg";
import Image from "next/image";
function page() {
  const notifySuccess = () =>
    toast.success("Email Sent!", {
      position: "bottom-left",
      style: {
        background: "#27272a",
        color: "white",
      },
    });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ushutox",
        "template_bdr820b",
        e.target,
        "q1D5oNAnxTQh_mV4m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    notifySuccess();
    e.target.reset();
  };
  return (
    <>
      <Toaster />
      <div className="h-fit lg:grid lg:grid-cols-2 ">
        <div className="m-[2rem] mt-[2rem]   md:ml-[7rem] md:mr-[4rem] lg:mr-0 md:mt-[5rem] text-zinc-200">
          <div className="w-fit">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
          </div>
          <form onSubmit={sendEmail} className="p-4 w-full">
            <div className="flex flex-col xl:flex-row w-full">
              <div className="grid p-4 w-full">
                <label className="font-semibold text-lg my-2 text-zinc-400">
                  First Name
                </label>
                <input
                  className="shadow-md shadow-black bg-zinc-600 bg-opacity-40 text-zinc-200 rounded-sm p-2 outline-none focus:ring-2 ring-orange-800 border-b-orange-800 border-b-2 focus:border-b-transparent placeholder-zinc-600"
                  placeholder="First Name"
                  type="text"
                  name="user_first_name"
                />
              </div>
              <div className="grid p-4  w-full">
                <label className="font-semibold text-lg my-2 text-zinc-400">
                  Last Name
                </label>
                <input
                  className="shadow-md shadow-black bg-zinc-600 bg-opacity-40 text-zinc-200 rounded-sm p-2 outline-none focus:ring-2 ring-orange-800 border-b-orange-800 border-b-2 focus:border-b-transparent placeholder-zinc-600  "
                  placeholder="Last Name"
                  type="text"
                  name="user_last_name"
                />
              </div>
            </div>
            <div className="p-4 grid w-full">
              <label className="font-semibold text-lg my-2 text-zinc-400">
                Email
              </label>
              <input
                className="shadow-md shadow-black bg-zinc-600 bg-opacity-40 text-zinc-200 rounded-sm p-2 outline-none focus:ring-2 ring-orange-800 border-b-orange-800 border-b-2 focus:border-b-transparent placeholder-zinc-600"
                placeholder="Email"
                type="email"
                name="user_email"
              />
            </div>
            <div className="p-4 grid w-full">
              <label className="font-semibold text-lg my-2 text-zinc-400">
                Message
              </label>
              <textarea
                className="shadow-md shadow-black bg-zinc-600 bg-opacity-40 text-zinc-200 rounded-sm p-2 outline-0 focus:ring-2 ring-orange-800 border-b-orange-800 border-b-2 focus:border-b-transparent placeholder-zinc-600 h-[15rem]"
                placeholder="Let's work together!"
                name="message"
              />
            </div>
            <div className="p-4 flex justify-center md:justify-start">
              <button
                type="submit"
                className="flex items-center  py-2 px-3 bg-orange-800 rounded-md transition-all hover:scale-105 hover:bg-orange-900 shadow-sm shadow-black"
              >
                <PaperAirplaneIcon className="h-5 w-5 text-zinc-300" />
                <p className="text-zinc-300 mx-4 my-1 font-semibold">
                  Send Message
                </p>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={emailDark}
            className="w-[800px]"
            alt="email illustration"
          />
        </div>
      </div>
    </>
  );
}

export default page;
