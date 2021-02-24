import React from "react";
import { Link } from 'react-router-dom';


const Budget = () => { 
 return (
    <section class="budget" data-aos="fade-up" data-aos-delay="200"  >
        <h3 class="budget__title">Solicite um orçamento</h3>
        <Link class="budget__link button button__contact" to="/pt/#Contato">Entre em contato{'>'}</Link>
    </section>
       
 )

};

export default Budget;
