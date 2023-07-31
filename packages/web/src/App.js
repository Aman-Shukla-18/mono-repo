import logo from './logo.svg';
import './App.css';
import {msg, logFxn, SharedUIComponent, getAPI, UserInfo} from 'shared'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAPI('https://jsonplaceholder.typicode.com/users', setData, console.log);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>From React Web</p>
        <p>{msg}</p>
        <div onClick={logFxn}> Press me and see log</div>
        <SharedUIComponent onPress = {() => {
          console.log("Called from Web")
        }} />
         {data?.map((item, index) => (
        <UserInfo data={item} />
      ))}
        
      </header>
    </div>
  );
}

export default App;
