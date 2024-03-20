import React from 'react';
import './reg.scss';
import {useEffect, useState} from 'react';


function Reg() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };
  const handleChange2 = event => {
    setPass(event.target.value);
  };

  function addUser(event) {
    event.preventDefault();
    fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, pass, 'avatarUrl': 'https://joesch.moe/api/v1/random'})
    });
    setName('');
    setPass('');
    alert("Вы успешно зарегестрировались!");
  }

  return (
    <div className="reg">
      <label htmlFor="name">Введите имя: </label>
      <input id="pass" onChange={handleChange} className="input" type="text" />
      
      <label htmlFor="name">Введите пароль: </label>
      <input id="pass" onChange={handleChange2} className="input" type="text" />
      <button onClick={addUser}>Зарегестрироваться</button>
    </div>
  );
}

export default Reg;
