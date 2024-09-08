import "./App.css";
import { Routes, Route } from "react-router-dom";
import Write from "./pages/Write";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
}

export default App;
