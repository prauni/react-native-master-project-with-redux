import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './pages/DrawerContent';

export default class TabA extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.btn}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Tab-A</Text>
      </View>
    );
  }
}
