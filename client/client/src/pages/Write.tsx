import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Write() {
  const [value, setValue] = useState<any | null>(
    `
    **SAMPLE HEADER** 
    
    
enter your own text here
    `
  );
  return (
    <>
      <div className="bg-gray-900 h-screen">
        <MDEditor
          className=""
          value={value}
          visibleDragbar={false}
          height={400}
          onChange={(string) => setValue(string)}
        />
        <div className="flex justify-center">
          <button className="text-white font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded m-2">
            Submit Article
          </button>
          <Link to="/">
            <button className="text-white font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded m-2">
              Return Home
            </button>
          </Link>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
