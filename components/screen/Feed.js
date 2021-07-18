import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, Header } from 'react-native-elements';


const SettingsScreen = ({navigation}) => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			
			
		
			
			<Text style={{color:'#0FF', fontSize:25}}>-: Screen / Feed :===</Text>
			
			<Avatar
				rounded
				size="large"
				source={{
					uri:'https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXegpcVbhCnIih1bm3OJldETKDmdprgKeI9mwoA4zsYBapE6JRYc3wrAsBgvoFijqssld9lMkIbYueoGqk1yARByfOX8.jpg',
				}}
			/>
			
			<Button
				onPress={() => navigation.navigate('Product', { screen: 'Settings' })}
				title="Open Notifications"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
		</View>
	);
}

export default SettingsScreen;