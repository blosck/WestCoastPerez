import "../styles/style.css";
import facebook from "../images/iconFacebook.png";
import instagram from "../images/iconInstagram.png";
import twitter from "../images/iconTwitter.png";

function Footer(){

    return(
        <div className="footer">
            <nav className="footer2">
                <p className="pfooter">Web diseñada por Pablo Pérez Pinto</p>
            </nav>
            <nav className="footer3">
            <a className="footer__net" href="http://www.twitter.com">
                <img src={twitter} alt="Twitter" height="25px"/>
            </a>
            <a className="footer__net" href="http://www.instagram.com">
                <img src={instagram} alt="Instagram" height="25px"/>
            </a>    
            <a className="footer__net" href="http://www.facebook.com">
                <img src={facebook} alt="Facebook" height="25px"/>
            </a>
                <p className="pfooter2">Encuéntranos en </p>
            </nav>
        </div>
    )
}

export default Footer