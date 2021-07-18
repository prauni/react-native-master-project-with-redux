import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Spp from './Rpp';

export default class App extends Component<{}> {


 render() {
   
   return (

     <Image source={ {uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/sample_full_image.jpg'} } style={styles.MainContainer} >


     


     </Image>
  );
 }
}


const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   width: null,
   height: null,
 }

});