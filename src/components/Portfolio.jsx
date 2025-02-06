import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import image3 from './images/pexels-fotoaibe-1571460.jpg'


function Portfolio(){

    const navigate = useNavigate()

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

    return (
        <div className='portfolio'>
            <div className='portfolio1'>
                <h1>portfolio</h1>
            </div>
            <div className='portfolio2'>
                <div className='portfolio3'>
                    <div  className='portfolio3_5'>
                        <img src={image3} alt='portfolio-image' />
                    </div>
                    <div className='portfolio3_6'>
                        <h3>Riverside Apartment</h3>
                        <p>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='portfolio3'>
                    <div  className='portfolio3_5'>
                        <img src={image3} alt='portfolio-image' />
                    </div>
                    <div className='portfolio3_6'>
                        <h3>Riverside Apartment</h3>
                        <p>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='portfolio3'>
                    <div  className='portfolio3_5'>
                        <img src={image3} alt='portfolio-image' />
                    </div>
                    <div className='portfolio3_6'>
                        <h3>Riverside Apartment</h3>
                        <p>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='portfolio3'>
                    <div  className='portfolio3_5'>
                        <img src={image3} alt='portfolio-image' />
                    </div>
                    <div className='portfolio3_6'>
                        <h3>Riverside Apartment</h3>
                        <p>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='portfolio3'>
                    <div  className='portfolio3_5'>
                        <img src={image3} alt='portfolio-image' />
                    </div>
                    <div className='portfolio3_6'>
                        <h3>Riverside Apartment</h3>
                        <p>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='portfolio3'>
                    <div  className='portfolio3_5'>
                        <img src={image3} alt='portfolio-image' />
                    </div>
                    <div className='portfolio3_6'>
                        <h3>Riverside Apartment</h3>
                        <p>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

