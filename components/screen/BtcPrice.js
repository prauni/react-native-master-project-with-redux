import React, { Component, useEffect, useState, useRef } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		let id = setInterval(() => {
			savedCallback.current();
		}, delay);
		
		return () => clearInterval(id);
	}, [delay]);
}

const BtcPrice = () => {
	const [counter, setCounter] 		= useState(0);
	const [isLoading, setLoading] 		= useState(true);
	const [btcusdPrice, setBTCUSDPrice] = useState(0);


	useInterval(() => {
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then((response) => response.json())
			.then((json) => {
				console.log('---'+json['bpi']['USD']['rate']);
				setBTCUSDPrice(json['bpi']['USD']['rate']);
			})
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
		setCounter(counter + 1);
	}, 1*60*1000);

	return (
		<Text style={{color:'#0FF', fontSize:27, padding:10}}>
			{counter} : {btcusdPrice}
		</Text>
	)
};

export default BtcPrice;