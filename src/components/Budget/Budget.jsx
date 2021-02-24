import React from "react";
import { Link } from 'react-router-dom';


const Budget = () => { 
 return (
    <section class="budget" data-aos="fade-up" data-aos-delay="200"  >
        <h3 class="budget__title">Request a quote </h3>
        <Link className="budget__link button button__contact" to="/#Contact">Contact us {'>'}</Link>
    </section>
       
 )

};

export default Budget;
