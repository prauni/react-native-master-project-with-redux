import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Rpp from './Rpp';



const App = () => {
	
	return (
		<View style={styles.screen} >
			<Text style={styles.bgcolor} >Social Login</Text>
			
			<Rpp />
		</View>
	)
}

const styles = StyleSheet.create({
	screen:{
		backgroundColor:"#910", height: "100%"
	},
	bgcolor:{
		color: "#FF0", backgroundColor:"#711", fontSize: 20, margin: 10, padding: 10, textAlign: "center"
	}
});

export default App;