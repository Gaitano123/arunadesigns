import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><NavLink className='navlink' to='/our-services'>our service</NavLink></li>
                <li><NavLink className='navlink' to='/our-story'>about us</NavLink></li>
                <li><NavLink className='navlink' to='/portfolio'>portfolio</NavLink></li>
                <li><NavLink className='navlink' to='/contact'>contact us</NavLink></li>
            </ul>
            <div>

            </div>
        </div>
    )
}


export default Navbar

