import React from 'react';
import './auth.scss';
import {useEffect, useState} from 'react';


function Auth() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [authUs, setAuthUs] = useState('');

  function autith() {
    fetch('http://localhost:3005/users')
    .then(request => request.json())
    .then(json => {
      const viewProduct = json.map((prod) => {
        if (name == prod.name && pass == prod.pass) {
          alert("Аутентификация прошла успешно!");
          setIsAuth(true);
          setAuthUs(prod.id);
        }
      });
      
    });
  }

  


  const handleChange = event => {
    setName(event.target.value);
  };
  const handleChange2 = event => {
    setPass(event.target.value);
  };

  return (
    <div className="auth">
      <label htmlFor="name">Введите имя: </label>
      <input id="pass" onChange={handleChange} className="input" type="text" />
      
      <label htmlFor="name">Введите пароль: </label>
      <input id="pass" onChange={handleChange2} className="input" type="text" />
      <button onClick={autith}>Войти</button>
    </div>
  );
}

export default Auth;