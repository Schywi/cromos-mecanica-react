import React from "react";
import eqp1 from '../../img/eqp1.jpg';
import eqp2 from '../../img/eqp2.jpg';
import eqp3 from '../../img/eqp3.jpg';
import eqp4 from '../../img/eqp4.jpg';
 

const About = (props) => { 
 return (
    <section class="main-container equipment" id="Equipment">
        <h2 data-aos="fade-right"> 
            <strong>Equipment</strong>
        </h2>
        <div class="equipment__content">
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="200">
                <img src={eqp1} alt=""/>
                <h6>Machining center, ROMI, modelo D600, FANUC OI-MC</h6>
                <a class="button" href="#">Find more</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="400">
                <img src={eqp2} alt=""/>
                <h6>UNIVERSAL MILLING MACHINE – ATLAS</h6>
                <a class="button" href="#">Find more</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="600">
                <img src={eqp3} alt=""/>
                <h6>Conventional lathe- ROMI S-30B</h6>
                <a class="button" href="#">Find more</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="800">
                <img src={eqp4} alt=""/>
                <h6>RECTIFIES PLANE MWM</h6>
                <a class="button" href="#">Find more</a>
            </div>
        </div>
   
</section>
 )

};

export default About;
