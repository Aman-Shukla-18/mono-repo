import logo from './logo.svg';
import './App.css';
import {msg, logFxn} from 'shared'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>From React Web</p>
        <p>{msg}</p>
        <div onClick={logFxn}> Press me and see log</div>
        
      </header>
    </div>
  );
}

export default App;
