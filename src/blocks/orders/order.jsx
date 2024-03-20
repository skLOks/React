import React from 'react';
import './order.css';
import {useState, useEffect} from 'react';


function Order() {
  const [order, setOrder] = useState([]);

  function getOrder() {
    fetch('http://localhost:3005/order')
    .then(data => data.json())
    .then(json => setOrder(json))
    .catch(() => console.log(12));
  }

  useEffect( () => {
    getOrder();
  }, [order]);

  const viewProduct = order.map((prod) => {
    return(
      <div className="product">
        <p className="id">Id: {prod.id}</p>
        <p className="name">Название: {prod.name}</p>
        <p className="date">Дата: {prod.date}</p>
        <p className="user">Пользователь: {prod.user}</p>
      </div>
    );
  });

  return (
    <div className="order">
    	{viewProduct}
      <h1>!Продажи прекращены, потому что нет товаров!</h1>
    </div>
  );
}

export default Order;
