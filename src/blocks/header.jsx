import './header.css';
import React from 'react';


function Header() {
  return (
    <div className="head">
      <ul>
        <div className="logo"><img src={require("./img/logo.png")}/></div>
        <li><a href="/">Главная</a></li>
        <li><a href="/calk">Калькулятор</a></li>
        <li><a href="/help">Техподдержка</a></li>
      </ul>
    </div>
  );
}

export default Header;
