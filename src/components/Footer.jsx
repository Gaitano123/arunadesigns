import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import image1 from './images/pexels-fotios-photos-1090638.jpg'
import image2 from './images/pexels-fotoaibe-1571453.jpg'
import image3 from './images/pexels-fotoaibe-1571460.jpg'
import image4 from './images/pexels-pixabay-271816.jpg'
import image5 from './images/pexels-pixabay-276724.jpg'


function Footer(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className="footer">
            <div className="footer1">
                <img className="footer2" src={image1} />
                <div className="footer3">
                    <ul className="footer4">
                        <li><NavLink onClick={() => scrollToTop()} className='footlink' to={"/contact"}>contact</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='footlink' to={'/portfolio'} >portfolio</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='footlink' to={'/privacy-terms'}>privacy terms</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='footlink' to={'https://www.instagram.com/arunainteriors/'} target="_blank" rel="noopener noreferrer">instagram</NavLink></li>
                    </ul>
                    <div className="footer5">
                        <img src={image2} alt="footer-image" />
                        <img src={image3} alt="footer-image" />
                        <img src={image4} alt="footer-image" />
                        <img src={image5} alt="footer-image" />
                    </div>
                </div>
            </div>
            <ul  className="footer6">
                <li>Aruna Interiors Ltd</li>
                <li>Riverside Drive, Nairobi Kenya</li>
                <li>Email: info@laylainteriors.com</li>
                <li>Tel: +254 797959562</li>
            </ul>
        </div>
    )
}

export default Footer

