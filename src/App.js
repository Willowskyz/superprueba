/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

import ItemCount from './components/ItemCount/ItemCount';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'; /* Solo para el desafio */

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      

        {/*<ItemListContainer greeting='Desafio Coder'/>  */}
        <ItemDetailContainer />
        <ItemCount stock={3}/>
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
