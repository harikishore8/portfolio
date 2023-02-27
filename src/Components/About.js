import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <div className="w-10/12 my-0 mx-auto h-auto flex flex-col justify-center">
        <h1 className="text-5xl mb-8 mt-8">About</h1>
        <div className="w-10/12 my-0 mx-auto">
          <h1 className="mb-4">
            Hi!👋 I'm Hari Kishore currently pursuing my UnderGraduate in
            Computer Technology
          </h1>
          <h1 className="flex mb-4 flex-row justify-between">
            CGPA
            <h1>8.71</h1>
          </h1>
          <div className="flex mb-4 flex-row justify-between">
            <h1>Internship</h1>
            <h1>Solar Secure Solutions(2months)</h1>
            <h1>Role:Web Developer👨‍💻</h1>
          </div>
          <div className="flex mb-4 flex-row justify-between">
            <h1>10th</h1>
            <h1>Chinmaya Vidyalaya Rajapalayam</h1>
            <h1>92.6%</h1>
          </div>
          <div className="flex mb-4 flex-row justify-between">
            <h1>12th</h1>
            <h1>Chinmaya Vidyalaya Rajapalayam</h1>
            <h1>78.83%</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
