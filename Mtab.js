import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button,  TouchableOpacity, Image, ImageBackground } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Header } from 'react-native-elements';
import NavIcon from './components/screen/NavIcon';

import MyDrawer from './components/MyDrawer';
import Tabmenu from './components/Tabmenu';
import MyStack from './components/NyStack';
import TabStackMenu from './components/Tabbar';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();


const Mtabs = ({navigation}) => {
	return (
		<SafeAreaProvider>
			<NavigationContainer
				options={{					
					headerStyle: {
						backgroundColor: '#000',
						height: 50,
						marginTop: 1 
					}
				}}>
				<MyDrawer  />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default Mtabs;