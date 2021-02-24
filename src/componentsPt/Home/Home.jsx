 
import React from "react";
import './Home.css';
import Chatbot from 'react-chatbot-kit';


import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import showChat from "../chatbot/removeChat";

// components
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Budget from "../Budget/Budget";
import Impact from "../Impact/Impact";
import Services from "../Services/Services";
 
import About from "../About/About";
import Equipment from "../Equipment/Equipment";
import OurServices from "../OurServices/OurServices";
import BudgetFooter from "../Budget/BudgetFooter";
import FooterBanner from "../Footer/FooterBanner";
import Partners from "../Partners/Partners";
import CreateQuote from "../Contact/CreateQuote"; 
import Footer from "../Footer/Footer";
import OurValue from "../OurValue/OurValue"; 

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import chatIcon from '../../chat.svg';


 


function Home() {


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
   <CreateQuote/>
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

export default Home;
