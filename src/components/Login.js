import React, {useState}  from "react";

function Login({handleLogin}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  };

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    handleLogin(password, email)
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
          type="password"
          id="password-field"
          value={password}
          onChange={handleChangePassword} />
          <button className="login__submit-button">Войти</button>
        </form>
      </div>
      
              );
  }
  
  export default Login;