import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom';
import Search from './Search/';

function Header({searchValue, setSearchValue}) {
  // console.log(searchValue, setSearchValue);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <Logo />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;