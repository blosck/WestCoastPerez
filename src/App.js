import './App.css';
import NavBar from './components/NavBar';
import Greeting from './components/ItemListContainer'
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar>
        <p>Hola!</p>   
      </NavBar>
      <Greeting greetings= {["estos", "son", "greeting", "props", "(creo)."]} cosas = {"cosas1"}/>
      <ItemCount stock="10" initial="1"/>
    </>
  );
}

export default App;
