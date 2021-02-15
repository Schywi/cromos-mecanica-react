import React from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Banner = () => { 

    const items = [ 
        <div class="banner">
        <div class="slideshow-container banner__content">
            <div class="pic-ctn">
            <section class=" mySlides fade banner1">
                                <div class="banner-text" data-aos="fade-up" data-aos-delay="200">
                                    <h1 class="banner__title">Machining in general</h1>
                                    <h2 class="banner__subtitle"> Maintenance and assembly of sets , devices,<br/> equipment and machines in general </h2>
                                <div class="button_container">
                                        <a class=" white " href="#">
                                            <p>
                                                <span class="bg"> </span>
                                                <span class="base"> </span>
                                                <span class="text banner"> Take a look {'>'}</span>
                                            </p>
                                        </a>
                                </div>
                                
                                    
                                    
                                </div>
                        
                        </section>
        </div>
        </div>
        </div>,

       <div class="banner">
       <div class="slideshow-container banner__content">
           <div class="pic-ctn">
           <section class=" mySlides fade banner2">
               <div class="banner-text" >
                   <h1 class="banner__title">Specialized tooling</h1>
                   <h2 class="banner__subtitle">  Production of stamping tools, plastic and aluminum injection moulds, <br/> precision devices and parts.</h2>
                   <div class="button_container">
                       <a class=" white " href="#">
                           <p>
                               <span class="bg"> </span>
                               <span class="base"> </span>
                               <span class="text banner"> Check out {'>'}</span>
                           </p>
                       </a>
                  </div>
               </div>
           </section>
           </div>
       </div>
       </div>,

      <div class="banner">
      <div class="slideshow-container banner__content">
          <div class="pic-ctn">
          <section class=" mySlides fade banner3 ">
                      <div class="banner-text">
                          <h1 class="banner__title">Confection of Hydraulic components</h1>
                          <h2 class="banner__subtitle"> Manufacture and recovery of cylinders, hydraulic jacks.</h2>
                          <div class="button_container">
                              <a class=" white " href="#">
                                  <p>
                                      <span class="bg"> </span>
                                      <span class="base"> </span>
                                      <span class="text banner"> Place your order {'>'}</span>
                                  </p>
                              </a>
                      </div>
                      </div>
                  </section>
          </div>
      </div>
      </div>,
     

    ];

 return (
    <AliceCarousel 
   
    items={items}
    autoPlayInterval={6666.666667}
  
    autoPlay={true}
    fadeOutAnimation={true}
    mouseTrackingEnabled={true}
    disableAutoPlayOnAction={true}
    infinite={true}
    disableDotsControls={true}
    disableButtonsControls={true}
    />
     
 )

};

export default Banner;
