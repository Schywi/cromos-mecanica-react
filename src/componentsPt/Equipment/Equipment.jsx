import React from "react";
import eqp1 from '../../img/eqp1.jpg';
import eqp2 from '../../img/eqp2.jpg';
import eqp3 from '../../img/eqp3.jpg';
import eqp4 from '../../img/eqp4.jpg';
 

const About = (props) => { 
 return (
    <section class="main-container equipment" id="Equipamentos">
        <h2 data-aos="fade-right"> 
            <strong>Equipamentos</strong>
        </h2>
        <div class="equipment__content">
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="200">
                <img src={eqp1} alt=""/>
                <h6>Centro de usinagem, ROMI, modelo D600, FANUC OI-MC</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="400">
                <img src={eqp2} alt=""/>
                <h6>FRESADORA UNIVERSAL – ATLAS</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="600">
                <img src={eqp3} alt=""/>
                <h6>Torno Convencional- ROMI S-30B</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="800">
                <img src={eqp4} alt=""/>
                <h6>RETIFICA PLANA MWM</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
        </div>
   
</section>
 )

};

export default About;
