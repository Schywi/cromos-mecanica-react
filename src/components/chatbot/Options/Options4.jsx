import React from "react";

import "./Options.css";

const Options4 = (props) => {
  const options4 = [
    {
      text: "Blades for Hydraulic Scissors",
        handler: props.actionProvider.contact,
      id: 1,
    },
    { text: "Hydraulic Cylinders",   handler: props.actionProvider.contact, id: 2 },
 
  ];

  const buttonsMarkup = options4.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options4;
