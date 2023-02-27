import React, { Fragment } from "react";
import Header from "./Header";
import prg from "../Assets/prg.jpg";
import gith from "../Assets/github.png";
import gm from "../Assets/gmail.png";
import li from "../Assets/linkedin.png";

function MainPage() {
  return (
    <Fragment>
      <Header />
      <div className="flex h-screen font-Fredoka-One text-gray-800">
        <div className="mx-0 my-auto flex flex-col justify-start w-1/2">
          <h1 className="mx-6">
            <span className="font-black text-5xl">H</span>
            <span className="italic font-hairline text-2xl">ello!</span>
            <span className="text-2xl">👋</span>
          </h1>
          <div className="w-4/5 my-0 mx-auto">
            <p>
              An entry level engineer passionate about creating clean and
              efficient code with an eye of detail.
            </p>
            <p>
              I enjoy working on a wide range of software development projects.
              I am always eager to learn new skills and technologies to improve
              my abilities.
            </p>
            <div className="flex flex-row w-auto mt-4">
              <a href="https://github.com/harikishore8">
                <img
                  className="w-1/3 mx-2 h-auto"
                  src={gith}
                  alt="Github"
                ></img>
              </a>
              <a href="harikishore.ct20@bitsathy.ac.in">
                <img className="w-1/3 mx-2 h-auto" src={gm} alt="Gmail"></img>
              </a>
              <a href="https://www.linkedin.com/in/harikishore8/">
                <img
                  className="w-1/3 mx-2 h-auto"
                  src={li}
                  alt="Linkedin"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img className="h-auto w-auto" src={prg} alt="img"></img>
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
