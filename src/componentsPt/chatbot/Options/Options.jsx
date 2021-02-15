import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Ferramentaria",
      handler: props.actionProvider.tooling,
      id: 1,
    },
    { 
      text: "Usinagem em Geral",
      handler: props.actionProvider.machining,
     id: 2
   },
    { 
      text: "Hidraulicos",
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
