/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element ={<ItemListContainer greeting='Todos Los tipos de Cafe'/>} />
              <Route path='/category/:categoryId' element ={<ItemListContainer greeting='Filtrado por categoria'/>} />
             {/*  <Route path='*' element ={ <h1>Errocito</h1> } /> */}
              <Route path='/detail/:productId' element ={<ItemDetailContainer/>  } /> 
              
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
