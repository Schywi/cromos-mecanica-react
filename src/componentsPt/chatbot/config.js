import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./Options/Options";
import Options2 from "./Options/Options2";
import Options3 from "./Options/Options3";
import Options4 from "./Options/Options4";
import Quiz from "./Quiz/Quiz";
import removeChat from './removeChat';

const config = {
  botName: `Cromos bot `,
  initialMessages: [
    createChatBotMessage(`Olá, em que posso ajudar?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "options2",
      widgetFunc: (props) => <Options2 {...props} />,
    },
    {
      widgetName: "options3",
      widgetFunc: (props) => <Options3 {...props} />,
    },
    {
      widgetName: "options4",
      widgetFunc: (props) => <Options4 {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
