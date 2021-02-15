import React from "react";
import icon1 from '../../img/icons/challenges.svg';
import icon2 from '../../img/icons/medal.svg';
import icon3 from '../../img/icons/professional.svg';

const Header = (props) => { 
 return (
    <section class="main-container main-responsive numbers">
        <div data-aos="fade-right" data-aos-delay="200" class="numbers__content" >
            <img src={icon1} alt=""/>
            <h3>Adoramos desafios

</h3>
            <p>Possuimos mais de 30 clientes sendo 3 deles listados na Bolsa de Valores.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" class="numbers__content">
            <img src={icon2} alt=""/>
            <h3> Foco na qualidade</h3>
            <p>Produzimos mais de 3000 peças de alta precisão por mês.</p>
        </div>
        <div  data-aos="fade-left" data-aos-delay="600" class="numbers__content">
            <img src={icon3} alt=""/>
            <h3>Profissionalismo</h3>
            <p>Nossos profissionais possuem mais de 28 anos de experiência no mercado de usinagem e ferramentaria.</p>
        </div>

    </section>
 )

};

export default Header;
