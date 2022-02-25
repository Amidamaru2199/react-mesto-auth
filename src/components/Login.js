import React, {useState}  from "react";
import { useHistory } from "react-router-dom";
import { authorization } from "./Auth";

function Login({handleLogin}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  };

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    authorization(password, email)
    .then((res) => {
      console.log(res.token)
      handleLogin(res.token)
      history.push('/home');
    })
  }


    return (
      
      <div className="login">
        <p className="login__title">Вход</p>
        <form onSubmit={handleSubmit} className="login__form">
          <input 
          className="login__email-field login__field" 
          placeholder="Email"
          name="email"
          type="email"
          id="email-field"
          value={email}
          onChange={handleChangeEmail} />
          <input 
          className="login__password-field login__field" 
          placeholder="Пароль"
          name="password"
          type="text"
          id="password-field"
          value={password}
          onChange={handleChangePassword} />
          <button className="login__submit-button">Войти</button>
        </form>
      </div>
      
              );
  }
  
  export default Login;