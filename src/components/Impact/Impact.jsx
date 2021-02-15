import React from "react";
import icon1 from '../../img/icons/challenges.svg';
import icon2 from '../../img/icons/medal.svg';
import icon3 from '../../img/icons/professional.svg';

const Header = (props) => { 
 return (
    <section class="main-container main-responsive numbers">
        <div data-aos="fade-right" data-aos-delay="200" class="numbers__content" >
            <img src={icon1} alt=""/>
            <h3>We love challenges</h3>
            <p>We have more than 30 clients, 3 of them listed on the Brazilian Stock Exchange.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" class="numbers__content">
            <img src={icon2} alt=""/>
            <h3>Focus on quality</h3>
            <p>We produce over 3000 high precision parts per month.</p>
        </div>
        <div  data-aos="fade-left" data-aos-delay="600" class="numbers__content">
            <img src={icon3} alt=""/>
            <h3>Professionalism</h3>
            <p>Our professionals have more than 28 years of experience in the machining and tooling market.</p>
        </div>

    </section>
 )

};

export default Header;
