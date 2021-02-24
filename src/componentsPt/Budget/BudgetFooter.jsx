import React from "react";
import { Link } from 'react-router-dom';


const BudgetFooter = () => { 
 return (
    <section class="budget budget__footer" data-aos="fade-in">
        <h3 class="budget__title">Solicite um orçamento</h3>
        <Link class="budget__link button button__contact" to="/pt/#Contato">Entre em contato{'>'}</Link>
    </section>

       
 )

};

export default BudgetFooter;
