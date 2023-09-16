// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import login from './components/login';
import register from './components/register';

import logout from './components/logout';

function App() {
  return (
    <div className='h-screen p-4 bg-white flex justify-center items-center'>
      <Routes>
        <Route path="/login" Component={login}/>
        <Route path="/register" Component={register}/>

        <Route path="/logout" Component={logout}/>
      </Routes>
    </div>
  );
}

export default App;
