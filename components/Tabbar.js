import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions, createDrawerNavigator } from 'react-navigation';

import ProdStack from './ProdStack';
import BrandStack from './BrandStack';

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


const tabbar = () => {
	return (
		<Tab.Navigator  initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="#3e2465"
				barStyle={{ backgroundColor: 'tomato', paddingBottom: 15  }} 
				
		>					
					<Tab.Screen 
						name="Brand" component={BrandStack} 
						options={{
							tabBarLabel: 'Brand',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="docker" color={color} size={26} />
							),
						}}
					/>
					
					
					<Tab.Screen 
						name="Product" component={ProdStack} 
						options={{
							tabBarLabel: 'Product',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="apps" color={color} size={26} />
							),
						}}
					/>
					<Tab.Screen 
						name="Home" component={Home} 
						options={{
							tabBarLabel: 'HomePx',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="home" color={color} size={26} />
							),
							headerTitle: 'Home',
							title: 'Home',
							tabBarTitle: 'BrandStack : Category'							
						}}
					/>
					
					<Tab.Screen 
						name="Cart" component={Cart} 
						options={{
							tabBarLabel: 'Cart',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="cart" color={color} size={26} />
							),
						}}
					/>
					<Tab.Screen 
						name="Orders" component={Orders} 
						options={{
							tabBarLabel: 'Orders',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="origin" color={color} size={26} />
							),
						}}
					/>
		</Tab.Navigator>
	)
}

export default tabbar;