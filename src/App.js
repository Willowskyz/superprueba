import React, { useState, createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

const App = () => {
  return (
    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element ={<ItemListContainer greeting='Todos Los tipos de Cafe'/>} />
              <Route path='/category/:categoryId' element ={<ItemListContainer greeting='Filtrado por categoria'/>} />
             {/*  <Route path='*' element ={ <h1>Errocito</h1> } /> */}
              <Route path='/detail/:productId' element ={<ItemDetailContainer/>  } />
              <Route path='/cart' element={<Cart />}/> 
              
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
