import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function Write() {
  const [value, setValue] = useState<any | null>("**Hello World**");
  return (
    <>
      <h1>YO</h1>
      <MDEditor value={value} onChange={(string) => setValue(string)} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </>
  );
}
