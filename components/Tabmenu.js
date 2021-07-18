import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
//import AboutusScreen from './AboutusScreen';
//import SettingsScreen from './SettingsScreen';

import Aboutme from './screen/Aboutus';
import Contact from './screen/Contact';
import Images from './screen/Images';
import Skill from './screen/Skill';


const Tab = createMaterialBottomTabNavigator();


const Tabmenu = () => {
	return (
		<Tab.Navigator  initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="#3e2465"
				barStyle={{ backgroundColor: '#4CAF50', paddingBottom: 15  }} >					
					<Tab.Screen 
						name="Home" component={HomeScreen} 
						options={{
							tabBarLabel: 'Home',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="home" color={color} size={26} />
							),
						}}
					/>
					
					<Tab.Screen 
						name="Aboutus" component={Aboutme} 
						options={{
							tabBarLabel: 'About Us',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="star" color={color} size={26} />
							),
						}}
					/>
					<Tab.Screen 
						name="HomePage" 
						component={Contact} 
						options={{
							tabBarLabel: 'Contact',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="phone" color={color} size={26} />
							),
						}}
					/>
					
					<Tab.Screen 
						name="Settings" component={Images} 
						options={{
							tabBarLabel: 'Images',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="file-image" color={color} size={26} />
							),
						}}
					/>
					<Tab.Screen 
						name="HomeP" 
						component={Skill} 
						options={{
							tabBarLabel: 'Skill',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="baby-carriage" color={color} size={26} />
							),
						}}
					/>
					
		</Tab.Navigator>
	);
}

export default Tabmenu;