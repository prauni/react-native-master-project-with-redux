import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import AboutusScreen from './AboutusScreen';
import SettingsScreen from './SettingsScreen';




const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default class MyApp extends Component {
    //ALL NAVIGATION STACKS IN 1 CONTAINER
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={MyStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BottomNav}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Crossing" component={HomeScreen} />
        </Stack.Navigator>
    )
}
const BottomNav = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon
                                style={[{ color: tintColor }]}
                                size={28}
                                name={'train'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon
                                style={[{ color: tintColor }]}
                                size={28}
                                name={'star'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon
                                style={[{ color: tintColor }]}
                                size={28}
                                name={'map'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Feedback"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon
                                style={[{ color: tintColor }]}
                                size={28}
                                name={'mail'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon
                                style={[{ color: tintColor }]}
                                size={28}
                                name={'add'}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
