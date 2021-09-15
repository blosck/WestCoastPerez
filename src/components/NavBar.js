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
                    <li className="navegationBar__item">HOME</li>
                    <li className="navegationBar__item">CELULARES</li>
                    <li className="navegationBar__item">ROPA</li>
                    <li className="navegationBar__item">ACCESORIOS</li>
                </ul>
                <Cart/>
                {props.children}
            </nav>
        </div>
    )
}

export default NavBar