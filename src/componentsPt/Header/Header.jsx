import React from "react";
import logo from '../../img/logo.png';
import enIcon from '../../img/icons/english.png';
import ptIcon from '../../img/icons/portuguese.png';
import { Link } from 'react-router-dom';

const Header = (props) => { 
 return (
    <header id="Home">
        <div class="header-container">
            <div class="logo">
                <img src={logo} alt=""/>

            </div>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item nav__item--active"><a href="#Home">Home</a></li>
                    <li class="nav__item"><a href="#About">Sobre</a></li>
                    <li class="nav__item"><a href="#Services">Serviços</a></li>
                    <li class="nav__item"><a href="#Equipment">Equipamentos</a></li>
                    <li class="nav__item"><a href="#Contact">Contato</a></li>
                    <li class="nav__item">
                            <Link to="/pt"> 
                                <img src={ptIcon} alt="portuguese Icon"/>
                            </Link>
                        </li>
                        <li class="nav__item">
                            <Link to="/"> 
                                <img src={enIcon} alt="English Icon"/>
                            </Link>
                        </li>
                       
                
                    
                            
                    </ul>
            </nav>
        </div>
  </header>

 )

};

export default Header;
