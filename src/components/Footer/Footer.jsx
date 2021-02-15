import React from "react";
import logoG from '../../img/logoGreen.png';


const FooterBanner = (props) => { 
 return (
    <footer >
        <div class="footer">
            <div class="footer__contacts">
                <img src={logoG}alt=""/>
                <div class="footer__contacts-information">
            
                    <ul>
                        <li>     <h2>Our contacts</h2></li>
                        <li>  
                            Rua Tomaz de Andrade, 41 B.Industrial Contagem-MG  <br/>
                            CEP: 32223-000
                        </li>
                        <li> +55 (31)3333-4900  </li>
                        <li> <a href="">financeiro1@cromosmecanica.com.br</a> </li>
                    </ul>
                </div>
            </div>
            <div class="footer__nav">
                <nav>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Equipment">Equipment</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        <div class="subfooter">
            <p> Copyright © 2021 Cromos Mecânica -
                Developed by:  <a target="_blank" href="https://www.lucasmirand.com/">Lucas Miranda</a>. All rights reserved</p>
        </div>
</footer>
 )

};

export default FooterBanner;
