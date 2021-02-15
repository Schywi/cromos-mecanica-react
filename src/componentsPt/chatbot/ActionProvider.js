class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  // functions that executes when user type
  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };


  tooling = () => {
    const message = this.createChatBotMessage(
      "Excelente, qual tipo de serviço você deseja ?",
      {
        widget: "options2",
      }
    );
    this.addMessageToState(message);
  } ;

    machining = () => {
      const message = this.createChatBotMessage(
        "Excelente, qual tipo de serviço você deseja ?",
        {
          widget: "options3",
        }
      );   
      this.addMessageToState(message);
    } ;

      hidraulyc = () => {
        const message = this.createChatBotMessage(
          "Excelente, qual tipo de serviço você deseja ?",
          {
            widget: "options4",
          }
        );
        this.addMessageToState(message);
      };

      contact = () => {
        const message = this.createChatBotMessage(
          "Certo, entrarei em contato com a equipe,  mas antes, por favor preencha o formulario de contato",

        );
        this.addMessageToState(message);
      };
    

  



  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Excelente, qual tipo de serviço você deseja ?",
      {
        widget: "options2",
      }
    );
    

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
