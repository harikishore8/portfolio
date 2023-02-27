import React, { Fragment } from "react";

function ProjectCard(props) {
  return (
    <Fragment>
      <div className="flex flex-col w-2/5 h-auto m-6  border-4 border-gray-600">
        <div className=" border-b-4 border-indigo-900 h-1/2">
          <img
            className="w-full h-full overflow-hidden object-scale-down"
            src={props.src}
            alt="project #"
          ></img>
        </div>
        <div className="p-2">
          <h2>{props.text}</h2>
        </div>
        <div className="p-2">
          <h2>Tech Used</h2>
          <h3>{props.tech}</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectCard;
