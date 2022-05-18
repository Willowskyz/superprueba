/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import CountFunction from './components/CountFunction/CountFunction.js';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'; /* Solo para el desafio */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CountFunction />
        <ItemListContainer greeting='Desafio Coder'/>
        {/*  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
