import React from "react";
import part1 from '../../img//partners/13.jpg';
import part2 from '../../img//partners/16.jpg';
import part3 from '../../img//partners/19.jpg';
import part4 from '../../img//partners/4.jpg';
import part5 from '../../img//partners/14.jpg';
import part6 from '../../img//partners/5.jpg';
import part7 from '../../img//partners/7.jpg';
import part8 from '../../img//partners/8.jpg';
import part9 from '../../img//partners/9.jpg';
import part10 from '../../img//partners/10.jpg';
import part11 from '../../img//partners/11.jpg';
import part12 from '../../img//partners/12.jpg';



const FooterBanner = (props) => { 
 return (
    <section class="partners">
    <h2 data-aos="fade-right">
        <strong>Partner Companies</strong>
    </h2>
    <div class="partners__content">
        <div class="partners__items"  data-aos="fade-in" data-aos-delay="400">
            <a  href="">
                <img src={part1} alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="600">
            <a href="">
                <img src={part2} alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="800">
            <a href="">
                <img src={part3} alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="1000">
            <a href="">
                <img src={part4}alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="1200">
            <a href="">
                <img src={part5} alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="1400">
            <a href="">
                <img src={part6}alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="400">
            <a href="">
                <img src={part7}alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="600">
            <a href="">
                <img src={part8}alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="800">
            <a href="">
                <img src={part9}alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="1000">
            <a href="">
                <img src={part10} alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="1200">
            <a href="">
                <img src={part11} alt="" />
            </a>
        </div>
        <div class="partners__items" data-aos="fade-in" data-aos-delay="1400">
            <a href="">
                <img src={part12} alt="" />
            </a>
        </div>
        
    </div>
   
</section>
 )

};

export default FooterBanner;
