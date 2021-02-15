import React from "react";

import "./Options.css";

const Options2 = (props) => {
  const options2 = [
    {
      text: "Parts Manufacturing",
      handler: props.actionProvider.contact,
      id: 1,
    },
    { text: "Manufacture of heavy machinery attachments", 
     handler: props.actionProvider.contact,
     id: 2 },
    { text: "Control Device Production", 
     handler: props.actionProvider.contact,
      id: 3 },
  ];

  const buttonsMarkup = options2.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options2;
