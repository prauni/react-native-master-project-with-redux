import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Computer from './Computer';
import Bike from './Bike';
import Mobile from './Mobile';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function ProdStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Mobile" component={Mobile} />
			<Stack.Screen name="Computer" component={Computer} />
			<Stack.Screen name="Bike" component={Bike} />
		</Stack.Navigator>
	);
}

const ProdBtn = ({navigation}) => {
	return (
		<Tab.Navigator  initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="#3e2465"
				barStyle={{ backgroundColor: 'tomato', paddingBottom: 15  }} >				
					<Tab.Screen 
						name="Product" component={ProdStack} 
						options={{
							tabBarLabel: 'Product',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="apps" color={color} size={26} />
							),
						}}
					/>
		</Tab.Navigator>
	)
}


/*
const ProdBtn = ({navigation}) => {
	return (
		<View>
			<Text style={{color:'#0FF', fontSize:25}}>-: Screen / ProdBtn </Text>
			<Button
				onPress={() => navigation.navigate('Mobile', { screen: 'Bike' })}
				title="Open Mobile Page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
				
			<Button
				onPress={() => navigation.navigate('Computer', { screen: 'Bike' })}
				title="Open Computer Page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
				
			<Button
				onPress={() => navigation.navigate('Bike', { screen: 'Bike' })}
				title="Open Bike Page"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>	
		</View>
	);
}
*/

export default ProdBtn;