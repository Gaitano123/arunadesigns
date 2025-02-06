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
            </div>
            <div className='home2'>
                <h2>State of the art design studio</h2>
                <p>Layla Interiors is an international interior design studio, specializing in luxurious residential interior for both private clients and developers. We aim to provide tailored designs that encompass luxury, comfort and functionality that are seamlessly designed and aesthetically pleasing</p>
            </div>
            <div className='home3'>
                <div className='our_company'>
                    <h2>Our Company</h2>
                    <p>Layla Interiors is a an interior design studio that is based in Sweden and Kenya. Specialising in interior and interior architectural design the studio works across residential, commercial and the hospitality sectors with private clients and developers.</p>
                    <p>Our experienced team of talented interior designers and architects provide exclusive services of detailed driven luxurious interiors that perfectly suit the client’s needs. At Layla interiors we bring a vast experience to the international property market along with a thoughtful understanding of the dynamics and requirements of contemporary living.</p>
                </div>
                <div className='home_image'>
                    <img className='home_image1' src={img} />
                    <div className='home_images'>
                        <img className='home_image2' src={img} />
                        <img className='home_image2' src={img} />
                    </div>
                </div>
            </div>
            <button className='home_button' onClick={() => {navigate("/our-story"); scrollToTop();}}>Read More</button>
            <div className='home4'>
                <h2>Latest Project</h2>
                <div className='latest_div'>
                    <div className='project_div'>
                        <img className='project_img' src={img} />
                        <div className='project_div2'>
                            <h2>kilimani</h2>
                        </div>
                    </div>
                    <div className='project_div'>
                        <img className='project_img' src={img} />
                        <div className='project_div2'>
                            <h2>kilimani</h2>
                        </div>
                    </div>
                    <div className='project_div'>
                        <img className='project_img' src={img} />
                        <div className='project_div2'>
                            <h2>kilimani</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
