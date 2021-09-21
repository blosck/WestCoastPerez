import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';


function App() {

  return (
    <>
      <Router>
        <NavBar>
          <p>Hola!</p>   
        </NavBar>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greetings= {"estos son reeting props (creo)."} cosas = {"cosas1"}/>
          </Route>
          <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
// </>