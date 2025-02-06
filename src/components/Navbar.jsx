import { NavLink } from "react-router-dom";
import img from "./images/pexels-fotoaibe-1571460.jpg"
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate()

    return(
        <div className="navbar">
            <ul>
                <li><NavLink className='navlink' to='/our-services'>our service</NavLink></li>
                <li><NavLink className='navlink' to='/our-story'>about us</NavLink></li>
                <li><NavLink className='navlink' to='/portfolio'>portfolio</NavLink></li>
                <li><NavLink className='navlink' to='/contact'>contact us</NavLink></li>
            </ul>
            <div className="logo" onClick={() => {navigate("/");}}>
                <img className="img_logo" src={img}/>
            </div>
        </div>
    )
}


export default Navbar

