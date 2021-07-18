import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContent } from './pages/DrawerContent';
//import { Bpp } from './Bpp';


function HoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Ho Screen</Text>
		<Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
		<Button	onPress={() => navigation.navigate('Notifications')}	title="Go to notifications" />
    </View>
  );
}


function NoScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>No Screen</Text>
			<Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

function SeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Se Screen</Text>
			<Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Drawer = createDrawerNavigator();

function SliderNav() {
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


export default SliderNav;