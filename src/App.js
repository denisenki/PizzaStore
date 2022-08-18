import React from 'react';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Cart from './components/Pages/Cart';
import FullPiza from './components/Pages/FullPiza';

import {
  Routes,
  Route,
  useParams
} from "react-router-dom";


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  // console.log(searchValue, "input");

  const par = function Invoice() {
    let params = useParams();
    console.log('app', params.Id);
    return params.Id;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/pizza/:id' element={<FullPiza par={par} />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
