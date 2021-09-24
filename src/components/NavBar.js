import {Cart} from "./CartWidget";
import {Link} from "react-router-dom"
import "../styles/nav.css";

function NavBar(){
    return(
        <div className="app">
            <nav className="navegationBar">
                <Link to="/">
                <h1 className="brand__name">West Coast Gear</h1>
                </Link>
                <ul className="navegationBar__container">
                    <Link to="/categoria/cases">
                        <li className="navegationBar__item">Cases</li>
                    </Link>
                    <Link to="/categoria/caps">
                        <li className="navegationBar__item">Caps</li>
                    </Link>
                    <Link to="/categoria/mascarillas">
                        <li className="navegationBar__item">Mascarillas</li>
                    </Link>
                    <Link to="/categoria/collares">
                        <li className="navegationBar__item">Collares</li>
                    </Link>
                    <Link to="/categoria/bags">
                        <li className="navegationBar__item">Bags</li>
                    </Link>
                </ul>
                <Cart/>
            </nav>
        </div>
    )
}

export default NavBar