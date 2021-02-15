import React from "react";

import "./Options.css";

const Options2 = (props) => {
  const options2 = [
    {
      text: "Fabricação de Peças",
      handler: props.actionProvider.contact,
      id: 1,
    },
    { text: "Confecção de Acessórios", 
     handler: props.actionProvider.contact,
     id: 2 },
    { text: "Produção de Dispositivos de Controle", 
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
