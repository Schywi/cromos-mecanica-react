import React from "react";
import {db,db1} from '../db';


const Services = (props) => { 
 return (
    <div class="dark" id="Serviços">
    <section class="main-container services">
        <h2 data-aos="fade-right">
            <strong>Serviços Prestados</strong>
        </h2>
        <h3 data-aos="fade-right">
            <strong>Soluções por Industria</strong>
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
            <strong>Soluções de Ferramentaria</strong>
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
            <strong>Soluções Hidráulicas</strong>
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
            <strong>Soluções de Usinagem</strong>
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
