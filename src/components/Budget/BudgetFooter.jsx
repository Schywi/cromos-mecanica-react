import React from "react";
import { Link } from 'react-router-dom';


const BudgetFooter = () => { 
 return (
    <section class="budget budget__footer" data-aos="fade-in">
        <h3 class="budget__title">Request a quote</h3>
        <Link className="budget__link button button__contact" to="/#Contact">Contact us {'>'}</Link>
    </section>

       
 )

};

export default BudgetFooter;
