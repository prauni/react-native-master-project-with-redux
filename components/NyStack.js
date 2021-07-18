import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import AboutusScreen from './AboutusScreen';
import SettingsScreen from './SettingsScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Root = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={AboutusScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const NyStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Root} />
        <Drawer.Screen name="Root" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NyStack;