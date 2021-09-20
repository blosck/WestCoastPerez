import {Cart} from "./CartWidget";
import "../styles/nav.css";
import {Link} from "react-router-dom"

function NavBar(props){
    return(
        <div className="app">
            <nav className="navegationBar">
                <Link extact to="/">
                <h1 className="brand__name">West Coast Gear</h1>
                </Link>
                <ul className="navegationBar__container">
                    <Link extact to="/categoria/cases">
                        <li className="navegationBar__item">Cases</li>
                    </Link>
                    <Link extact to="/categoria/caps">
                        <li className="navegationBar__item">Caps</li>
                    </Link>
                    <Link extact to="/categoria/mascarillas">
                        <li className="navegationBar__item">Mascarillas</li>
                    </Link>
                    <Link extact to="/categoria/collares">
                        <li className="navegationBar__item">Collares</li>
                    </Link>
                    <Link extact to="/categoria/bags">
                        <li className="navegationBar__item">Bags</li>
                    </Link>
                </ul>
                <Cart/>
                {props.children}
            </nav>
        </div>
    )
}

export default NavBar