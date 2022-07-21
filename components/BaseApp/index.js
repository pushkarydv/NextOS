import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { extractVideoID } from "../globalFunctions/extractVideoID";
import { toggleApp } from "../globalFunctions/toggle";

export default function BaseApp() {
  const nodeRef = React.useRef(null);
  const [url, setUrl] = useState("");
  const [id, setId] = useState("zp-ZXtTcobw");
  function handleForm(e) {
    e.preventDefault();
    setId(extractVideoID(url));
    setUrl("");
  }

  return (
    <>
      <Draggable nodeRef={nodeRef} handle="#draggableDiv">
        <div
          className={
            "w-[85%] sm:w-96 bg-fuchsia-100/60 mx-auto ring-2 rounded-md ring-fuchsia-100/80 backdrop-blur-sm relative z-10 mt-6"
          }
          ref={nodeRef}
          id="music"
        >
          <div
            className="w-full flex flex-row text-base items-center justify-between p-[0.1rem] bg-fuchsia-100/60 rounded-t-md cursor-pointer px-1"
            id="draggableDiv"
          >
            <div className="text-lg">Music</div>

            <button
              className="w-5 h-5 bg-pink-400 rounded-full"
              onClick={() => {
                toggleApp("music");
              }}
            ></button>
          </div>
          <form
            action=""
            onSubmit={handleForm}
            className="transition-all w-[96%] text-xl relative mx-auto my-2"
          >
            <input
              type="url"
              name="url-box"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              id="urlBox"
              autoFocus={true}
              autoComplete="off"
              className="transition-all bg-slate-100  outline-none border-2 border-transparent rounded-xl text-xl focus:border-slate-500 focus:scale-[103%] p-2 w-full"
              placeholder=" Video URL"
              required={true}
            />
            <button
              type="submit "
              className="absolute right-1 top-1 w-10 h-10 z-10 bg-slate-100 rounded-full"
            >
              <SearchIcon className="w-full stroke-slate-600 dark:stroke-slate-300 stroke-[1]" />
            </button>
          </form>
          <div className="flex flex-col items-center align-center">
            {/* play any other song property search-bar */}
            <iframe
              width="560"
              height="315"
              className="w-full rounded"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Draggable>
    </>
  );
}
