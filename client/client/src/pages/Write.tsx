import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function Write() {
  const [value, setValue] = useState<any | null>(
    `
    **SAMPLE HEADER** 
    
    
enter your own text here
    `
  );
  return (
    <>
      <div className="bg-cyan-950 h-screen">
        <MDEditor
          className=""
          value={value}
          onChange={(string) => setValue(string)}
        />
        <button className="text-white font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded m-2">
          Submit Article
        </button>
      </div>
    </>
  );
}
