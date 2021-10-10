import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/cartContext';

function App() {

  return (
    <>
    
      <CartContextProvider>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/"component={ItemListContainer}/>
            <Route exact path="/categoria/:idCategoria" component={ItemListContainer}/>
            <Route exact path="/item/:id" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
          <Footer/>
        </Router>
      </CartContextProvider>
      
    </>
  );
}

export default App;