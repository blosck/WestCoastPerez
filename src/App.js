import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


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
          <Route path="/categoria/:idCategoria" component={ItemListContainer}/>

          <Route exact path ="/item">
            <ItemDetailContainer/>
          </Route>
          <Route path="/item/:id" component={ItemDetailContainer}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
// </>