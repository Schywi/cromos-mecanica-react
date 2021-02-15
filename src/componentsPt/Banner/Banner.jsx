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
                                    <h1 class="banner__title">Usinagem em Geral</h1>
                                    <h2 class="banner__subtitle"> Fabricação e montagens de conjuntos, dispositivos, <br/> equipamentos e máquinas em geral </h2>
                                <div class="button_container">
                                        <a class=" white " href="#">
                                            <p>
                                                <span class="bg"> </span>
                                                <span class="base"> </span>
                                                <span class="text banner"> Confira {'>'}</span>
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
                   <h1 class="banner__title">Ferramentaria Especializada</h1>
                   <h2 class="banner__subtitle">  Produção de ferramentas de estampo, moldes para injeção de plástico e alumínio,
 <br/> dispositivos e peças de precisão.</h2>
                   <div class="button_container">
                       <a class=" white " href="#">
                           <p>
                               <span class="bg"> </span>
                               <span class="base"> </span>
                               <span class="text banner"> Veja mais {'>'}</span>
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
                          <h1 class="banner__title">Confecção de componentes Hidráulicos</h1>
                          <h2 class="banner__subtitle"> Fabricação e recuperação de cilindros, macacos hidráulicos.</h2>
                          <div class="button_container">
                              <a class=" white " href="#">
                                  <p>
                                      <span class="bg"> </span>
                                      <span class="base"> </span>
                                      <span class="text banner"> Faça seu pedido {'>'}</span>
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
    autoPlayInterval={3666.666667}
  
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
