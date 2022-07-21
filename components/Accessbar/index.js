import React from "react";
import {
  ChatAlt2Icon,
  CloudIcon,
  CodeIcon,
  DeviceMobileIcon,
  FolderIcon,
  MusicNoteIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { toggleApp } from "../globalFunctions/toggle";
export default function Accessbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full  flex flex-col overflow-x-auto justify-center align-center ">
      <div className="flex flex-row m-1 mb-2 p-1 bg-slate-50/80 ring-2 ring-slate-200/80 rounded-lg gap-1 w-fit mx-auto">
        <button className="transition p-1 rounded-md relative">
          <VideoCameraIcon className="w-8 stroke-red-600 peer md:hover:scale-95" />
          <div className="transition-all absolute invisible sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-red-400 "></div>
        </button>

        <button className="transition p-1 rounded-md relative">
          <ChatAlt2Icon className="w-8 stroke-emerald-500 peer md:hover:scale-95" />
          <div className="transition-all absolute invisible sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-emerald-300 "></div>
        </button>
        <button className="transition p-1 rounded-md relative">
          <CodeIcon className="w-8 stroke-slate-800 peer md:hover:scale-95" />
          <div className="transition-all absolute invisible sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-slate-600 "></div>
        </button>
        <button
          className="transition p-1 rounded-md relative"
          onClick={() => {
            toggleApp("about");
          }}
        >
          <img src="/logo.png" className="w-8  peer md:hover:scale-95" alt="" />
          <div className="transition-all absolute  sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-slate-700 "></div>
        </button>
        <button className="transition p-1 rounded-md relative">
          <FolderIcon className="w-8 stroke-amber-500 peer md:hover:scale-95" />
          <div className="transition-all absolute invisible sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-amber-300 "></div>
        </button>
        <button
          className="transition p-1 rounded-md relative"
          onClick={() => {
            toggleApp("music");
          }}
        >
          <MusicNoteIcon className="w-8 stroke-fuchsia-500 peer md:hover:scale-95" />
          <div className="transition-all absolute   sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-fuchsia-400"></div>
        </button>
        <button className="transition p-1 rounded-md relative">
          <CloudIcon className="w-8 stroke-cyan-600 peer md:hover:scale-95" />
          <div className="transition-all absolute invisible sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-cyan-400 "></div>
        </button>
        <button className="transition p-1 rounded-md relative">
          <DeviceMobileIcon className="w-8 stroke-cyan-800 peer md:hover:scale-95" />
          <div className="transition-all absolute invisible sm:peer-hover:visible bottom-0 left-1/2 -translate-x-1/2 z-0 w-4 h-[0.2rem] rounded-xl bg-cyan-600 "></div>
        </button>
      </div>
    </div>
  );
}
