import {
  CogIcon,
  LightningBoltIcon,
  ServerIcon,
  TerminalIcon,
  WifiIcon,
} from "@heroicons/react/solid";
import React from "react";

export default function Widget() {
  return (
    <div className=" max-w-xl absolute right-2 top-2 p-1 bg-slate-100 z-0 rounded-lg">
      <div className="flex justify-between text-base px-1 gap-4">
        <LightningBoltIcon className="w-6 fill-sky-500" /> 46%
      </div>
      <div className="flex justify-between text-base px-1 gap-4">
        <ServerIcon className="w-6 fill-red-500 animate-[pulse_2s_ease_infinite]" />{" "}
        93%
      </div>
      <div className="flex justify-around text-base px-1 mt-1 flex-wrap gap-2">
        <TerminalIcon className="transition w-6 fill-sky-900 cursor-pointer hover:scale-95" />
        <WifiIcon className="transition w-6 fill-sky-900 cursor-pointer hover:scale-95" />
        <CogIcon className="transition w-6 fill-sky-900 cursor-pointer hover:scale-95" />
      </div>
    </div>
  );
}
