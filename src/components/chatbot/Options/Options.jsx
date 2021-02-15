import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Tooling",
      handler: props.actionProvider.tooling,
      id: 1,
    },
    { 
      text: "Machining in General",
      handler: props.actionProvider.machining,
     id: 2
   },
    { 
      text: "Hydraulics",
      handler: props.actionProvider.hidraulyc,
      id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
