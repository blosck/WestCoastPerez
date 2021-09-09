import './App.css';
import NavBar from './components/NavBar';
import Greeting from './components/ItemListContainer'
import ItemCount from './components/ItemCount';

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
      <NavBar>
        <p>Hola!</p>   
      </NavBar>
      <Greeting greetings= {["estos", "son", "greeting", "props", "(creo)."]} cosas = {"cosas1"}/>
      <ItemCount stock="10" initial="1" onAdd={onAdd} />
    </>
  );
}

export default App;
