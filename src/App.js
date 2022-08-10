import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Cart from './components/Pages/Cart';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [searchValue, setSearchValue] = React.useState('пеппер');
  console.log(searchValue, "input");

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
