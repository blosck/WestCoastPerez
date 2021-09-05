import {Cart} from "./CartWidget";
import "../styles/nav.css";

function NavBar(){
    return(
        <div className="app">
            <nav className="navegationBar">
                <h1 className="brand__name">West Coast Gear</h1>
                <ul className="navegationBar__container">
                    <li className="navegationBar__item">HOME</li>
                    <li className="navegationBar__item">CELULARES</li>
                    <li className="navegationBar__item">ROPA</li>
                    <li className="navegationBar__item">ACCESORIOS</li>
                </ul>
                <Cart/>
            </nav>
        </div>
    )
}

export default NavBar