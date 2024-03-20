import React from 'react';
import './header.css';
import {useEffect} from 'react';


function Header() {
  return (
    <div className="head">
      <div className="header">
        <h1>HOSHOP</h1>
        <a href="/">Главная</a>
        <a href="/reg">Регестрация</a>
        <a href="/auth">Авторизация</a>
        <a href="/cart">&#128722;</a>
      </div>
    </div>
  );
}

export default Header;
