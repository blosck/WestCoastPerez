const style1 = {    
    height: "100",
    backgroundColor: "blue",
    color: "orange"
}

const style2 = {
    height: "70",
    backgroundColor: "yellow",
    color: "darkblue"
}

function App(){
    return(
        <div className="app" style={style1}>
            <header className="brand">
                <h1 className="brand__name">West Coast Gear</h1>
            </header>
            <nav className="navegationBar" style={style2}>
                <ul className="navegationBar__container">
                    <li className="navegationBar__item">HOME</li>
                    <li className="navegationBar__item">CELULARES</li>
                    <li className="navegationBar__item">ROPA</li>
                    <li className="navegationBar__item">ACCESORIOS</li>
                </ul>
            </nav>
        </div>
    )
}
