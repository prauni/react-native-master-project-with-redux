import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';
import DrawerBtn from './DrawerBtn';

const AboutusScreen = ({navigation}) => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff"></Icon.Button>
						)
					}} >
			<Text style={{color:'#F0F', fontSize:25}}>About Us Screen Only</Text>
			<Button
				onPress={() => navigation.openDrawer()}
				title="Open Drawer"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
		</View>
	);
}

export default AboutusScreen;