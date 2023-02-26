import React from "react";

function Header() {
  const border =
    "border-solid text-gray-200 cursor-pointer border-2 border-grey-400 rounded-lg mx-2 px-2";
  return (
    <header className="sticky top-0">
      <div className="flex flex-row flex-wrap justify-around bg-indigo-900 px-10 py-3">
        <a
          href="/"
          className="text-gray-200 rounded-lg border-solid border-2 border-grey-400 px-10"
        >
          HariKishore
        </a>
        <div>
          <ul className="flex flex-row justify-between">
            <li className={border}>About</li>
            <li className={border}>Skills</li>
            <li className={border}>Projects</li>
            <li className={border}>Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
