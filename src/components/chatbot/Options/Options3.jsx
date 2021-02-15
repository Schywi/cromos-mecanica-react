import React from "react";

import "./Options.css";

const Options3 = (props) => {
  const options3 = [
    
    {
      text: "Reforms",
        handler: props.actionProvider.contact,
      id: 1,
    },
    { text: "Parts Manufacturing",   handler: props.actionProvider.contact, id: 2 },
    { text: "Maintenance",   handler: props.actionProvider.contact, id: 3 },
    { text: "Recovery",   handler: props.actionProvider.contact, id: 4 },
    { text: "Concerts",   handler: props.actionProvider.contact, id: 5 },
    {
      text: "Assembly and disassembly of equipment",
        handler: props.actionProvider.contact,
      id: 6,
    },
 
  ];

  const buttonsMarkup = options3.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options3;
