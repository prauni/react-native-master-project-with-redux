import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';


const Brand = ({navigation}) => {
	return (
		<View 
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#555' }} 
			options={{
						headerLeft: () => (
							<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
						)
					}} >
			<Text style={{color:'#0FF', fontSize:25}}>-: Screen / Brand :-</Text>
			<Button
				onPress={() => navigation.navigate('Category', { screen: 'Category' })}
				title="Open Category"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				/>
				

			<View style={{flexDirection:'row'}}>
				<Button
					onPress={() => navigation.openDrawer()}
					title="Open Drawer :-"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
					/>
			</View>				
		</View>
	);
}

export default Brand;