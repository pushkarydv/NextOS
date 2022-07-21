import React from "react";
import { Github, LinkedIn, Twitter } from "../../svgs";

export default function Footer() {
  return (
    <div className="p-2  text-base">
      <div className="flex flex-row gap-3 flex-wrap items-center justify-center ">
        <a
          href="http://github.com/pushkarydv"
          className="transition no-underline bg-sky-700 p-2 text-slate-50 w-8 h-8 ring-2 ring-sky-500 rounded-full hover:scale-95"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="transition w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/pushkarydv"
          className="transition no-underline bg-sky-600 p-2 text-slate-50 w-8 h-8 ring-2 ring-sky-400 rounded-full hover:scale-95"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn className="transition w-full h-full" />
        </a>
        <a
          href="https://twitter.com/pushkaryadav_"
          className="transition no-underline bg-sky-500 p-2 text-slate-50 w-8 h-8 ring-2 ring-sky-300 rounded-full hover:scale-95"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter className="transition w-full h-full" />
        </a>
      </div>
      <div className="text-center text-slate-600 dark:text-slate-400 p-2 ">
        &lt;/&gt; &amp; crafted with 💚 by{" "}
        <a
          href="https://pushkaryadav.in"
          className="no-underline text-slate-800 dark:text-slate-100"
          rel="noopener noreferrer"
          target="_blank"
        >
          Pushkar Yadav
        </a>
      </div>
    </div>
  );
}
