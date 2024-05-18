import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import img from "./images/pexels-fotoaibe-1571460.jpg"

function Home(){

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

    return(
        <div className='home'>
            <div className='home1'>
                <img src={img} alt='home image' />
            </div>
            <div className='home2'>
                <h2>State of the art design studio</h2>
                <p>Layla Interiors is an international interior design studio, specializing in luxurious residential interior for both private clients and developers. We aim to provide tailored designs that encompass luxury, comfort and functionality that are seamlessly designed and aesthetically pleasing</p>
            </div>
            <div className='home3'>
                <div>
                    <h2>Our Company</h2>
                    <p>Layla Interiors is a an interior design studio that is based in Sweden and Kenya. Specialising in interior and interior architectural design the studio works across residential, commercial and the hospitality sectors with private clients and developers.</p>
                    <p>Our experienced team of talented interior designers and architects provide exclusive services of detailed driven luxurious interiors that perfectly suit the client’s needs. At Layla interiors we bring a vast experience to the international property market along with a thoughtful understanding of the dynamics and requirements of contemporary living.</p>
                </div>
                <div>
                    {/* images */}
                </div>
            </div>
            <button onClick={() => {navigate("/about"); scrollToTop();}}>read more</button>
            <div className='home4'>
                <h2>Latest Project</h2>
                <div>
                    {/* images */}
                </div>
            </div>
        </div>
    )
}

export default Home
