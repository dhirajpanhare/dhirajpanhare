import "./Style.css"
import { Link } from "react-router-dom";
function Navabr()
{
    return(
        <>
        <header>
    <div class="outer">
    <a href="/" class="logo"><img src="assets/logo.png" /></a>
</div>
    <div class="nav">
        <div class="nav-items">
<a><Link to="/">Home</Link></a>
<a><Link to="/About">About</Link></a>
<a><Link to="/Projects">Pojects</Link></a>
<a><Link to="/Certificates">Certificates</Link></a>
<a><Link to="/Contact">Contact</Link></a>
<a><Link to="/Notes">Notes</Link></a>
<a><Link to="/Register">Register</Link></a>
<a>  </a>

        </div>
    </div>
    <div class="social-items">
        <a href="https://www.linkedin.com/in/dhirajpanhare/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/dhirajpanhare"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:dhirajpanhare8@gmail.com"><i class="fa-regular fa-envelope"></i></a>
    </div>
 
 </header>


        </>
    )
}

export default Navabr;