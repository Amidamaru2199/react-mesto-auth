import React from 'react';
import logo from '../images/Vector.svg';
import {Link, Route} from "react-router-dom";

function Header({onLogOut, email}) {
  return (
    
      <header className="header container__header">
        <img className="header__logo" src={logo} alt="Лого" />
        <Route path='/sign-up'>
          <Link to="/sign-in" className="header__auth">
            Войти
          </Link>
        </Route>

        <Route path='/sign-in'>
          <Link to="/sign-up" className="header__auth">
            Регистрация
          </Link>
        </Route>

        <Route exact path='/'>
          <div className='header__nav'>
          <p className="header__email">{email}</p>
          <Link to="/sign-in" className="header__sign-out" onClick={onLogOut}>
            Выйти
          </Link>
          </div>
        </Route>
        
      </header>
    
            );
}

export default Header;