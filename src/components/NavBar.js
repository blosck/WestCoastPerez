import {CartWidget} from "./CartWidget";
import {Link} from "react-router-dom"
import "../styles/style.css";

function NavBar(){

    return(
        <div className="app">
            <nav className="navegationBar">
                <Link to="/" className="linkBrand">
                <h1 className="brand__name">WestCoast<span className="gear">Gear</span></h1>
                </Link>
                <ul className="navegationBar__container">
                    <Link to="/categoria/cases" className="linkCategoria">
                        <li className="navegationBar__item">Cases</li>
                    </Link>
                    <Link to="/categoria/caps" className="linkCategoria">
                        <li className="navegationBar__item">Caps</li>
                    </Link>
                    <Link to="/categoria/mascarillas" className="linkCategoria">
                        <li className="navegationBar__item">Mascarillas</li>
                    </Link>
                    <Link to="/categoria/collares" className="linkCategoria">
                        <li className="navegationBar__item">Collares</li>
                    </Link>
                    <Link to="/categoria/bags" className="linkCategoria">
                        <li className="navegationBar__item">Bags</li>
                    </Link>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar