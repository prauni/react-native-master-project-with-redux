import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#46563f' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			<Text style={{color:'#F00', fontSize:25}}>-: Home Page :-</Text>
			<Button
				onPress={() => navigation.openDrawer()}
				title="Open Drawer"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
		</View>
	);
}

export default HomeScreen;