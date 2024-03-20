import React from 'react';
import './cart.css';
import {useState, useEffect} from 'react';


function Cart() {
  const [cart, setCart] = useState([]);

  function getCart() {
    fetch('http://localhost:3005/cart')
    .then(data => data.json())
    .then(json => setCart(json))
    .catch(() => console.log(12));
  }

  useEffect( () => {
    getCart();
  }, [cart]);

  function deleteCart(id) {
    fetch(`http://localhost:3005/cart/${id}`, {
      method: "DELETE",
      headers: {
         'Content-Type': 'application/json'
      }
    })
  }

  const viewProduct = cart.map((prod) => {
    return(
      <div className="product">
        <p className="name">Название: {prod.name}</p>
        <img src={prod.img} className="imgProd"/>
        <p className="id">Id: {prod.id}</p>
        <p className="price">Цена: {prod.price}$</p>
        <button onClick={() => {deleteCart(prod.id)}}>Удалить</button>
      </div>
    );
  });

  return (
    <div className="cart">
    	{viewProduct}
      <a href="/order">Заказы</a>
    </div>
  );
}

export default Cart;
