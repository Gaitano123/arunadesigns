import { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "./images/pexels-fotoaibe-1571460.jpg"
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state
    };

    // const closeMenu = () => {
    //     setMenuOpen(false); 
    //   };

    return(
        <div className="navbar">
            <i class="fa-solid fa-bars menu" onClick={toggleMenu}></i>
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><i class="fa-solid fa-x close-menu" onClick={toggleMenu}></i></li>
                <li><NavLink className={menuOpen ? "navlink hme active" : "navlink hme"} onClick={toggleMenu} to='/'>home</NavLink></li>
                <li><NavLink className='navlink' onClick={toggleMenu} to='/our-services'>our services</NavLink></li>
                <li><NavLink className='navlink' onClick={toggleMenu} to='/our-story'>about us</NavLink></li>
                <li><NavLink className='navlink' onClick={toggleMenu} to='/portfolio'>portfolio</NavLink></li>
                <li><NavLink className='navlink' onClick={toggleMenu} to='/contact'>contact us</NavLink></li>
            </ul>
            <div className="logo" onClick={() => {navigate("/");}}>
                <img className="img_logo" src={img}/>
            </div>
        </div>
    )
}


export default Navbar

