import logo from './logo.svg';
import './App.css';
import './Eightball.css'
import Eightball from './Eightball';
const array = require ('./array')

function App() {
  return (
    <div className="App">
      <form>
        <button className="button">Restart</button>
        </form>
      <Eightball array={array}/> 
    </div>
  );
}

export default App;
