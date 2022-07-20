import React from "react";

export default function Background() {
  return (
    <div className="p-0 m-0 overflow-hidden fixed -z-10 top-0 left-0 w-full h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        viewBox="24 105 156 95"
        className="w-full h-screen"
      >
        <rect x="0" y="0" width="300" height="300" className="fill-slate-900" />
        <path
          className="top-outer fill-emerald-400 stroke-teal-800"
          strokeWidth="1"
          d="M68 1c23,0 67,17 69,39 4,38 5,52 -5,69 -20,36 -68,46 -120,-9 -27,-28 -7,-101 56,-99z"
        />
        <path
          className="top-inner fill-amber-400 stroke-yellow-500"
          strokeWidth="1"
          d="M69 22c33,-7 52,21 54,37 3,26 -1,28 -8,40 -15,25 -48,25 -85,-14 -19,-20 -4,-53 39,-63z"
        />
        <path
          className="bottom-outer fill-emerald-400 stroke-teal-800"
          strokeWidth="1"
          d="M158 158c30,13 56,50 44,75 -9,18 -22,46 -42,55 -20,10 -48,2 -73,-19 -29,-25 -27,-55 -9,-79 17,-22 43,-48 80,-32z"
        />
        <path
          className="bottom-inner fill-amber-400 stroke-yellow-500"
          strokeWidth="1"
          d="M136 180c32,-9 45,13 46,29 3,27 8,29 0,42 -14,25 -52,24 -79,0 -21,-18 -2,-61 33,-71z"
        />
      </svg>
      <style jsx>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0);
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }

          @keyframes rotate {
            0% {
              transform: rotate(0);
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }

          .top-outer {
            transform-origin: 73px 69px;
            transform-origin: 73px 69px;
            animation: rotate 30s linear infinite;
            animation: rotate 30s linear infinite;
          }

          .top-inner {
            transform-origin: 73px 69px;
            transform-origin: 73px 69px;
            animation: rotate 20s linear infinite;
            animation: rotate 20s linear infinite;
          }

          .bottom-outer {
            transform-origin: 134px 222px;
            transform-origin: 134px 222px;
            animation: rotate 30s linear infinite;
            animation: rotate 30s linear infinite;
          }

          .bottom-inner {
            transform-origin: 134px 222px;
            transform-origin: 134px 222px;
            animation: rotate 20s linear infinite;
            animation: rotate 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
