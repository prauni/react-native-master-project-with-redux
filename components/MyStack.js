import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

const MyStack = ({ navigation }) =>{
  return (
	<Stack.Navigator>
		<Stack.Screen name="Home2" component={HomeScreen} options={{
				headerLeft: (props) => (
					
					<HeaderBackButton {...props} onPress={() => { }} />,
					<Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#666" onPress={() => navigation.openDrawer()}></Icon.Button>
				)
			}}	/>
		<Stack.Screen name="Notifications" component={SettingsScreen}         options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}/>
		<Stack.Screen name="Profile" component={HomeScreen} />
		<Stack.Screen name="Settings" component={SettingsScreen} />
	</Stack.Navigator>
  );
}

export default MyStack;