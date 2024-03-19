import React from 'react';
import {Component} from 'react';
import {useState, useEffect} from 'react';
import './calk.css';
import { fx } from './money.js';

let eur, usd, kzt;



function Calk() {

	const [Eur, setEur] = useState('');
	const [Usd, setUsd] = useState('');
	const [Kzt, setKzt] = useState('');

	
	fetch('https://www.cbr-xml-daily.ru/daily_json.js')
	.then(response => response.json())
	.then(json => { eur = json.Valute.EUR['Value'];
					usd = json.Valute.USD['Value'];
					kzt = json.Valute.KZT['Value'];
					setEur(eur);
					setUsd(usd);
					setKzt(kzt)});
	
	

	const [znach, setZnach] = useState('');
	const [outp, setOutp] = useState('');
	const [firstCh, setFirstCh] = useState('Тенге');
	const [secondCh, setSecondCh] = useState('Тенге');
	const [massZn, setMassZn] = useState(["KZT", "KZT"]);

	fx.base = "RUB";
	fx.rates = {
		"EUR" : Eur,
		"KZT" : Kzt,
		"USD" : Usd,
		"RUB" : 1,

	}

	const handleChange = event => {
	    setZnach(event.target.value);
  	};

  	const sel1Change = event => {
	    setFirstCh(event.target.options[event.target.selectedIndex].text);
  	};

  	const sel2Change = event => {
	    setSecondCh(event.target.options[event.target.selectedIndex].text);
  	};

  	function usloviya() {
  		let a, b;
  		if (firstCh == "Тенге") {
  			a = 'KZT';
  		} else if (firstCh == "Доллар") {
  			a = 'USD';
  		} else if (firstCh == "Евро") {
  			a = 'EUR';
  		} else if (firstCh == "Рубль") {
  			a = 'RUB';
  		}
  		if (secondCh == "Тенге") {
  			b = 'KZT';
  		} else if (secondCh == "Доллар") {
  			b = 'USD';
  		} else if (secondCh == "Евро") {
  			b = 'EUR';
  		} else if (secondCh == "Рубль") {
  			b = 'RUB';
  		}
  		let arrey = [];
  		arrey.push(a, b);
  		setMassZn(arrey);
  	}

  	function outChange() {
  		usloviya();
  		setOutp(Math.round(fx(znach).from(massZn[0]).to(massZn[1])));
  	}


 

	return (
		<div className="block">
			<div className="block1">
				<label htmlFor="valut">Введите<br /> сумму: </label>
				<input id="valut" onChange={handleChange} className="input" type="text" /> <br/>
				<select className="inp" onChange={sel1Change}>
					<option value="KZT">Тенге</option>
					<option value="USD">Доллар</option>
					<option value="EUR">Евро</option>
					<option value="EUR">Рубль</option>
				</select>
			</div>
			<div className="block2">
				<p className="winout">{outp}</p>
				<select className="out" onChange={sel2Change}>
					<option value="KZT">Тенге</option>
					<option value="USD">Доллар</option>
					<option value="EUR">Евро</option>
					<option value="EUR">Рубль</option>
				</select>
			</div>
			
			<button className="perev" onClick={outChange}>Перевести</button>
			<p className="zamechanie">!Вычисления округляются!</p>
		</div>
	);
}

export default Calk;