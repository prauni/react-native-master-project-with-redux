import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const Profile = (props) => {
  return (
	<View style={styles.screen} >
		<ImageBackground source={require('../images/img01.jpg')} style={styles.bgImgScreen} >
			<Image source={{ uri: props.userpic }} style={{ width: 150, height: 150 }} />
			<Text>Welcome {props.username}</Text>
		</ImageBackground>
	</View>
  );
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1, justifyContent: 'center', alignItems: 'center', width: null, height: null
	},	
	screen:{
		 padding:0, justifyContent: 'center', alignItems: 'center'
	},
	screenbg:{
		 width:'100%', padding:0, justifyContent: 'center', alignItems: 'center' 
	},
	bgImgScreen:{
		width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'
	},
	logoImg:{
		width: 150, height: 150, margin: 0,  padding:0
	},
	fbtn:{
		color: "#FFF", backgroundColor:"#007", fontSize: 20, margin: 10, padding: 10, textAlign: "center"
	},
	gbtn:{
		color: "#FFF", backgroundColor:"#F07", fontSize: 20, margin: 10, padding: 10, textAlign: "center"
	}
});


export default Profile;