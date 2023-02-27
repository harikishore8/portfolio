import React from "react";
import ProjectCard from "./Ui/ProjectCard";

function Project() {
  return (
    <div className="my-0 mx-auto h-screen">
      <h1 className="text-5xl w-10/12 my-0 mx-auto">Projects</h1>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default Project;
