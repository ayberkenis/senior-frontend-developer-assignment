import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'

import orderHistory from './components/orderHistory';

function App() {
  return (

      <div className='h-screen p-4 bg-white flex justify-center items-center'>
        <Routes>
          <Route path="/order-history" Component={orderHistory} />
        </Routes>
      </div>

  );
}

export default App;
