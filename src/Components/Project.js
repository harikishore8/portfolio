import React from "react";
import ProjectCard from "./Ui/ProjectCard";
import search from "../Assets/search.jpg";
import expen from "../Assets/expen.jpg";
import order from "../Assets/order.png";

function Project() {
  return (
    <div className="mt-32">
      <div className="my-0 mx-auto h-full">
        <h1 className="text-5xl w-10/12 my-0 mx-auto">Projects</h1>
        <div className="flex flex-row flex-wrap w-10/12 mt-14 my-0 mx-auto h-full justify-around">
          <ProjectCard
            src={order}
            text="Web based food Ordering Web App which is used to smoothly order and reflect orders in the database"
            tech="Html CSS ExpressJS MySql"
          />
          <ProjectCard
            src={expen}
            text="A simple yet powerful expense tracker to track all your daily, monthly, yearly expenses"
            tech="React ExpressJS NodeJS"
          />
          <ProjectCard
            src={search}
            text="Web Based search engine used to search and deliver the search results to the users"
            tech="JavaScript React FireBase"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
