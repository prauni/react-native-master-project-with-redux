import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'; 
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




const ProdStack = ({navigation}) =>{
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Mobile" component={Mobile} 
				options={{
					headerTitle: 'ProdStack ::: Mobile',					
					headerRight: () => (
						<NavIcon
							navigationProps={navigation}
						/>
					),
				}}
			/>
			<Stack.Screen 
				name="Computer" component={Computer} 
				options={{
					headerTitle: 'ProdStack : Computer',					
					headerRight: () => (
						<NavIcon
							navigationProps={navigation}
						/>
					),
				}}
			/>
			<Stack.Screen 
				name="Bike" component={Bike} 
				options={{
					headerTitle: 'ProdStack : Bike',					
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

export default ProdStack;