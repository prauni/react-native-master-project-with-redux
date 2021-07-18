import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';
import ProdBtn from './ProdBtn';

const SettingsScreen = ({navigation}) => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ae82a6' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			<Text style={{color:'#0FF', fontSize:25}}>Screen / Computer </Text>
			<Button
				onPress={() => navigation.navigate('Bike', { screen: 'Settings' })}
				title="Open Bike Page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
				
			<Text style={{color:'#0FF', fontSize:25}}>-: ProdBtn </Text>
			<View style={{flexDirection:'row'}}>
				<Button
					onPress={() => navigation.navigate('Mobile', { screen: 'Bike' })}
					title="Mobile"
					color="#00b"
					margin="10"
					accessibilityLabel="Learn more about this purple button"
					/>
					
				<Button
					onPress={() => navigation.navigate('Computer', { screen: 'Bike' })}
					title="Computer"
					color="#0054bd"
					accessibilityLabel="Learn more about this purple button"
					/>
					
				<Button
					onPress={() => navigation.navigate('Bike', { screen: 'Bike' })}
					title="Bike"
					color="#00b"
					accessibilityLabel="Learn more about this purple button"
					/>
			</View>
			<View style={{flexDirection:'row'}}>
				<Button
					onPress={() => navigation.openDrawer()}
					title="Open Drawer :-"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
					/>
			</View>
		</View>
	);
}

export default SettingsScreen;