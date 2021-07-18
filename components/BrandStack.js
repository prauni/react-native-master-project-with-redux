import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions, createDrawerNavigator } from 'react-navigation';


import NavIcon from './screen/NavIcon';
import Home from './screen/Home';
import Aboutme from './screen/Aboutus';
import Settings from './screen/Settings';
import Mobile from './screen/Mobile';
import Computer from './screen/Computer';
import Bike from './screen/Bike';
import Feed from './screen/Feed';
import Cart from './screen/Cart';
import Orders from './screen/Orders';

import Brand from './screen/Brand';
import Category from './screen/Category';
import Offer from './screen/Offer';
import Notifications from './screen/Notifications';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

const BrandStack = ({navigation}) => {
	return (
		<Stack.Navigator >
			<Stack.Screen 
				name="Brand" component={Brand}
				options={{
					headerTitle: 'BrandStack : Brand',
					headerRight: () => (
						<NavIcon
							navigationProps={navigation}
						/>
					),
					headerStyle: {
						backgroundColor: '#f4511e',
						height: 50
					},
				}}
			/>
			<Stack.Screen 
				name="Category" component={Category} 
				options={{
					headerTitle: 'BrandStack : Category',					
					headerRight: () => (
						<NavIcon
							navigationProps={navigation}
						/>
					),
				}}
			/>
			<Stack.Screen 
				name="Offer" component={Offer} 
				options={{
					headerTitle: 'BrandStack : Offer',					
					headerRight: () => (
						<NavIcon
							navigationProps={navigation}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}



export default BrandStack;