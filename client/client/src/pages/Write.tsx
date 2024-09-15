import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Submission from "../components/Submission";

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
          height={450}
          onChange={(string) => setValue(string)}
        />

        <div className="flex justify-center">
          <Submission />
          <Link to="/">
            <button className="text-white font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded m-2">
              Return Home
            </button>
          </Link>
          <Modal />
        </div>
      </div>
    </>
  );
}
