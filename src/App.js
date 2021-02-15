 
import React from "react";
import './App.css';
import Chatbot from 'react-chatbot-kit';


import config from "./components/chatbot/config";
import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import showChat from "./removeChat";

// components
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Budget from "./components/Budget/Budget";
import Impact from "./components/Impact/Impact";
import Services from "./components/Services/Services";
 
import About from "./components/About/About";
import Equipment from "./components/Equipment/Equipment";
import OurServices from "./components/OurServices/OurServices";
import BudgetFooter from "./components/Budget/BudgetFooter";
import FooterBanner from "./components/Footer/FooterBanner";
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import OurValue from "./components/OurValue/OurValue"; 

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import chatIcon from './chat.svg';


import "./App.css";


function App() {

  

  return (
    <div className="App">
        <button  className="  chatButton" onClick={showChat}  >
            <img className="chatImg" src={chatIcon} />

        </button>
       <div   id="showChat" >
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
      <Header/>
      <Banner/>
    

     
      <Budget/>
      <Impact/>
      <OurServices/>
      <Services/>
      <About/>
      <Equipment/>
      <OurValue/>
      <BudgetFooter/>
      <FooterBanner/>
      <Partners/>
      <div className="main-container container-form">
          <Contact/>
      </div>
     
      <Footer/>
      
     
     
    
     
    </div>
  );
}
AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms

  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
}
);

export default App;
