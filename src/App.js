import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  const onAdd = (contador) => {
    if(contador == 1){
        alert("Agregaste " + contador + " producto.")
    }else{
        alert("Agregaste " + contador + " productos.")
    }
  }

  return (
    <>
      <Router>
        <NavBar>
          <p>Hola!</p>   
        </NavBar>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greetings= {["estos", "son", "greeting", "props", "(creo)."]} cosas = {"cosas1"}/>
          </Route>
          <Route path ="/contador" exact>
            <ItemCount stock="10" initial="1" onAd={onAdd} />
          </Route>
          <Route exact path ="/detail">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
// </>