import React, { Fragment } from "react";
import Card from "./Ui/Card";
import reactlogo from "../Assets/react.png";
import c from "../Assets/c-.png";
import css from "../Assets/css-3.png";
import exp from "../Assets/exp.png";
import html from "../Assets/html.png";
import mongo from "../Assets/mongo.png";
import tail from "../Assets/tail.png";
import node from "../Assets/node-js.png";

function Skills() {
  return (
    <Fragment>
      <div className="flex flex-col h-full items-center">
        <h1 className="text-5xl w-10/12 my-0 mx-auto flex justify-start mb-8">
          Skills
        </h1>
        <div className="my-0 mx-auto flex flex-row flex-wrap items-center justify-center">
          <Card imgurl={c} text="C++" />
          <Card imgurl={reactlogo} text="ReactJS" />
          <Card imgurl={node} text="NodeJS" />
          <Card imgurl={exp} text="ExpressJS" />
          <Card imgurl={mongo} text="MongoDB" />
          <Card imgurl={tail} text="Tailwind" />
          <Card imgurl={html} text="Html" />
          <Card imgurl={css} text="Css" />
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
