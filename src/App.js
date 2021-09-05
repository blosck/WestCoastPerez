import './App.css';
import NavBar from './components/NavBar';
import Greeting from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <Greeting greetings= {["estos", "son", "greeting", "props", "(creo)"]}/>
    </>
  );
}

export default App;
