import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const SliderNav = ({navigation}) =>{
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
				<Drawer.Screen name="HomePage" component={HoScreen} />
				<Drawer.Screen name="MainTabScreen" component={HoScreen} />
				<Drawer.Screen name="Notifications" component={NoScreen} />
				<Drawer.Screen name="Setting" component={SeScreen} />
			</Drawer.Navigator>
		</NavigationContainer> 
	);
}

const AboutusScreen = () => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			<Text>About Us Screen</Text>
			<Button onPress={() => navigation.openDrawer()}>Open Drawer :-</Button>
		</View>
	);
}

export default AboutusScreen;