import React from "react";

function Card(props) {
  return (
    <div className="w-48 h-40 hover:border-indigo-600 mx-6 m-2 border-solid border-4 border-gray-200 rounded-md py-2">
      <div className="my-0 mx-auto w-1/2 h-24">
        <img className="w-full h-full" src={props.imgurl} alt="a"></img>
      </div>
      <div className="py-2 text-center">{props.text}</div>
    </div>
  );
}

export default Card;
