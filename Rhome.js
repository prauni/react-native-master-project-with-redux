import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './pages/DrawerContent';


export default class Home extends Component {
render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.btn}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Home Screen</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('StackScreen')}>
          <Text>Stack Navigation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
