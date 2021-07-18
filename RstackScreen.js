
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './pages/DrawerContent';

export default class StackScreen extends Component {
render() {
    return(
      <View style={styles.container}>
        <Text style={styles.infoText}>Stack Screen</Text>
      </View>
    );
  }
}