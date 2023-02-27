import React, { Fragment } from "react";
import Header from "./Header";

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
            {/* <div>
              <a
                href="https://www.flaticon.com/free-icons/gmail"
                title="gmail icons"
              >
                Gmail
              </a>
            </div> */}
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="h-48"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F3213828%2Fscreenshots%2F6612869%2Fmclarenf1800x600.gif&f=1&nofb=1&ipt=029b998d72f794bb6d02c7c7d4b1c4c748f1af0c170e9576d391098c9d422c28&ipo=images"
            alt="img"
          ></img>
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
