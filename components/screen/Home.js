import React, { Component, useEffect, useState } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import BtcUSDPrice from './BtcPrice';

const SettingsScreen = ({navigation}) => {
	const [isLoading, setLoading] = useState(true);
	const [btcPrice, setBTCPrice] = useState('');
	
	
	
	useEffect(() => {
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then((response) => response.json())
			.then((json) => {setBTCPrice(json['bpi']['USD']['rate'])})
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);
		
		
	
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#46563f' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			
			<Text style={{color:'#0FF', fontSize:25}}>-: Screen / Home Page </Text>
			<Text style={{color:'#0FF', fontSize:27, padding:10}}>-: 1 BTC = {btcPrice} USD :-</Text>
			
			<BtcUSDPrice />
			
			<Button
				onPress={() => navigation.navigate('Settings', { screen: 'Home' })}
				title="Open Setting Page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
				
			<Button
				onPress={() => navigation.openDrawer()}
				title="Open Drawer :-"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
		</View>
	);
}

export default SettingsScreen;