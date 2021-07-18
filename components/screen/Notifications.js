import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';


const SettingsScreen = ({navigation}) => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			<Text style={{color:'#0FF', fontSize:25}}>-: Screen / Notification</Text>
			<Button
				onPress={() => navigation.navigate('HomePage', { screen: 'Settings' })}
				title="Open Home Page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
			<Button
				onPress={() => navigation.navigate('Home', { screen: 'Settings' })}
				title="Open Home Stack"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
				
		</View>
	);
}

export default SettingsScreen;