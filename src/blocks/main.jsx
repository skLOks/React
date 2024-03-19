import React from 'react';
import {useState} from 'react';
import './main.css';

let eur, usd, kzt;



function Main() {

	const [Eur, setEur] = useState('0');
	const [Usd, setUsd] = useState('0');
	const [Kzt, setKzt] = useState('0');

	function course() {
		fetch('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(response => response.json())
		.then(json => { eur = json.Valute.EUR['Value'];
						usd = json.Valute.USD['Value'];
						kzt = json.Valute.KZT['Value'];
						setEur(eur);
						setUsd(usd);
						setKzt(kzt)});
	}
	


	return (
		<div className="main">
			<p>€ Евро: {Eur}₽</p>
			<p>$ Доллар: {Usd}₽</p>
			<p>₸ Тенге: {Kzt}₽</p>
			<button onClick = {course}>Показать курс</button>
		</div>
	
	);
}

export default Main;