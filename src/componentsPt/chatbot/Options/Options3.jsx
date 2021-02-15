import React from "react";

import "./Options.css";

const Options3 = (props) => {
  const options3 = [
    
    {
      text: "Reformas",
        handler: props.actionProvider.contact,
      id: 1,
    },
    { text: "Fabricação de peças",   handler: props.actionProvider.contact, id: 2 },
    { text: "Manutenção",   handler: props.actionProvider.contact, id: 3 },
    { text: "Recuperação",   handler: props.actionProvider.contact, id: 4 },
    { text: "Concertos",   handler: props.actionProvider.contact, id: 5 },
    {
      text: "Montagem e desmontagem de equipamentos",
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
