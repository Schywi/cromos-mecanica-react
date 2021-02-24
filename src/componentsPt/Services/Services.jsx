import React from "react";
import {db,db1} from '../db';


const Services = (props) => { 
 return (
    <div class="dark" id="Services">
    <section class="main-container services">
        <h2 data-aos="fade-right">
            <strong>Services Provided</strong>
        </h2>
        <h3 data-aos="fade-right">
            <strong>Solutions by Industry</strong>
        </h3>

        <div class="services__content "> 

        {db1.map((result) => {
             if(result.id <=9) {
                return (
                    
                 
                 <div class={"services__items service" + (result.id)} data-aos="fade-in" data-aos-delay={result.id*100} >
                    <div class="services__items-text">
                        <h6>{result.title}</h6>
                        <a class="button serviceButton" href={`/pt/service/${result.id}`}>Find more</a>
                    </div>
                </div>
                
                  )
             } 
                  })}
        </div>

        <h3 data-aos="fade-right">
            <strong>Tooling Solutions</strong>
        </h3>
            <div class="services__content services-fit "> 

            {db1.map((result) => {
                if(result.id >=10 && result.id <=12) {
                    return (
                        <div class={"services__items service" + (result.id)} data-aos="fade-in" data-aos-delay={(result.id-9)*200} >
                            <div class="services__items-text">
                                <h6>{result.title}</h6>
                                <a class="button serviceButton" href={`/pt/service/${result.id}`}>Find more</a>
                            </div>
                        </div>
                        )
                }
                    
                    
                    })}
            </div>
        
       
        <h3 data-aos="fade-right">
            <strong>Hydraulic Solutions</strong>
        </h3>
        <div class="services__content services-fit "> 

            {db1.map((result) => {
                if(result.id >=13 && result.id <=15) {
                    return (
                        <div class={"services__items service" + (result.id)} data-aos="fade-in" data-aos-delay={(result.id-12)*200} >
                            <div class="services__items-text">
                                <h6>{result.title}</h6>
                                <a class="button serviceButton" href={`/pt/service/${result.id}`}>Find more</a>
                            </div>
                        </div>
                        )
                }
                    
                    
                    })}
        </div>
 
            
        <h3 data-aos="fade-right">
            <strong>Machining Solutions</strong>
        </h3>
        <div class="services__content services-fit "> 

        {db1.map((result) => {
            if(result.id >=16) {
                return (
                    <div class={"services__items service" + (result.id)} data-aos="fade-in" data-aos-delay={(result.id-15)*200} >
                        <div class="services__items-text">
                            <h6>{result.title}</h6>
                            <a class="button serviceButton" href={`/pt/service/${result.id}`}>Find more</a>
                        </div>
                    </div>
                    )
            }
                
                
                })}
        </div>
       
    </section>
    </div>
)

};

export default Services;
