// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css'

function App() {
  return (
    <div className='h-screen p-4 bg-white'>
      <Routes>
        <Route path="/cart" Component={Cart}/>

        <Route path="/" Component={ProductList}/>
      </Routes>
    </div>
  );
}

export default App;
