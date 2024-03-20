import React from 'react';
import './tovs.css';
import {useState, useEffect} from 'react';


function Tovs() {

  let usd;

  const [tovars, setTovars] = useState([]);
  const [Usd, setUsd] = useState('');

  function getCourse() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(json => {
            usd = json.Valute.USD['Value'];
            setUsd(usd)});
  }

  function getTovs() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(data => data.json())
    .then(json => setTovars(json.drinks))
    .catch(() => console.log(12));
  }

  useEffect( () => {
    getTovs();
    getCourse();
  }, [tovars]);

  function addCart(event, name, img, price) {
    event.preventDefault();
    fetch('http://localhost:3005/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, img, price})
    });
  }

  const viewProduct = tovars.map((prod) => {
    return(
      <div className="product">
        <p className="name">Название: {prod.strDrink}</p>
        <img src={prod.strDrinkThumb} className="imgProd"/>
        <p className="id">Id: {prod.idDrink}</p>
        <p className="price">Цена: {Math.round(prod.idDrink / Usd)}$</p>
        <button className="addCart" onClick={(event) => {
          addCart(event, prod.strDrink, prod.strDrinkThumb, Math.round(prod.idDrink / Usd));
        }}>Добавить в корзину</button>
      </div>
    );
  });

  return (
    <div className="tovs">
    	{viewProduct}
    </div>
  );
}

export default Tovs;
