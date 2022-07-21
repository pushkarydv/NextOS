import React from "react";

export default function About() {
  return (
    <div className="transition w-[85%] sm:w-96 lg:w-[45%] xl:w-[40%] 2xl:w-[35%] bg-slate-200 mx-auto mt-8 rounded-lg ">
      <div className="w-full flex flex-row flex-wrap text-base items-center justify-between p-2 bg-fuchsia-100/60 rounded-t-md cursor-pointer ">
        <div className="text-base">About</div>

        <button className="w-5 h-5 bg-fuchsia-600 rounded-full"></button>
      </div>
      <div className="flex flex-col items-center justify-center p-2">
        <img src="/logo.png" className="w-12" alt="logo" />
        <div className="text-2xl font-bold my-2">NextOS</div>
        <div className="mb-2 text-slate-600 text-center text-base">
          A Modern Operating System design built into a Website using Next JS
          and Tailwind CSS
        </div>
        <div className="w-full my-1">
          <div className="text-lg px-1">Features:</div>
          <div className="flex flex-row flex-wrap text-base gap-1 my-1">
            {feature("🔥 Modern UI")}
            {feature("🌈 Live Wallpaper")}
            {feature("💻 Apps")}
            {feature("📊 Widgets")}
          </div>
        </div>
        <div className="w-full my-1">
          <div className="text-lg px-1">Built With:</div>
          <div className="flex flex-row flex-wrap text-base gap-1 my-1">
            {[
              "https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge",
              "https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge",
              "https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge",
              "https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white&style=for-the-badge",
              "https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge",
              "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white&style=for-the-badge",
              "https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white&style=for-the-badge",
              "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
            ].map((link) => (
              <img key={link} src={link} className="h-6 w-fit" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function feature(text) {
  return (
    <div className="transition py-1 px-2 cursor-pointer bg-slate-400/20 hover:bg-slate-500/20  rounded-xl">
      {text}
    </div>
  );
}
