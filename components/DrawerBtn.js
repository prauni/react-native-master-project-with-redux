import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';


const DrawerBtn = ({navigation}) => {
	return (
		<Button
			onPress={() => navigation.openDrawer()}
			title="Open Drawer"
			color="#841584"
			accessibilityLabel="Learn more about this purple button"
			/>
	);
}

export default DrawerBtn;