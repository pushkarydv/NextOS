import { CogIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Draggable from "react-draggable";

export default function BaseApp() {
  const nodeRef = React.useRef(null);
  return (
    <>
      <Draggable nodeRef={nodeRef} handle="#draggableDiv">
        <div
          className={
            "w-96 bg-fuchsia-100/60 mx-auto ring-2 rounded-md ring-fuchsia-100/80 backdrop-blur-sm"
          }
          ref={nodeRef}
        >
          <div
            className="w-full flex flex-row text-base items-center justify-between p-[0.1rem] bg-fuchsia-100/60 rounded-t-md cursor-pointer"
            id="draggableDiv"
          >
            <div className="text-lg">Music</div>
            <div className="flex flex-row gap-1">
              <button className="w-6 text-fuchsia-700 ">
                <CogIcon className="w-full h-full" />
              </button>

              <button className="w-6 text-red-500 rotate-45">
                <PlusCircleIcon className="w-full h-full" />
              </button>
            </div>
          </div>
          content
        </div>
      </Draggable>
    </>
  );
}
