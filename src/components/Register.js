import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { register } from "./Auth";

function Register({handleRegister}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory()

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  };

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    console.log(evt.target.value)
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    
    register(password, email)
    .then((res) => {
      if(res) {
        //console.log(res)
        history.push('/sign-in')
      }
    }).catch((err) => {console.log(err)})
  };

    return (
      
      <div className="register">
        <p className="register__title">Регистрация</p>
        <form onSubmit={handleSubmit} className="register__form">
          <input 
          className="register__email-field register__field" 
          placeholder="Email"
          name="email"
          type="email"
          id="email-field"
          value={email}
          onChange={handleChangeEmail}
          />
          <input 
          className="register__password-field register__field" 
          placeholder="Пароль"
          name="password"
          type="text"
          id="password-field"
          value={password}
          onChange={handleChangePassword}
          />
          <button className="register__submit-button">Зарегистрироваться</button>
        </form>
        <div className="register__signin">
          <p className="register__signin-text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="register__login-link">Войти</Link>
        </div>
      </div>
      
              );
  }
  
  export default Register;