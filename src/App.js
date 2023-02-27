import React from "react";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="w-10/12 my-0 mx-auto font-Fredoka-One">
      <MainPage />
      <Skills />
      <About />
    </div>
  );
}

export default App;
