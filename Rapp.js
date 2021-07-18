import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './pages/DrawerContent';


import { Home } from './Rhome';
import { StackScreen } from './RstackScreen';
import { TabA } from './RtabA';
import { TabB } from './RtabB';

const StackNav = createStackNavigator(
  {
      Home: Home,
      StackScreen: StackScreen,
  },
  {
    initialRouteName: 'Home'
  }
);
const TabNav = createBottomTabNavigator(
    {
      Home: StackNav,
      TabA: TabA,
      TabB: TabB
    },
    {
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {
          fontSize: 18,
        },
        style: {
          backgroundColor: 'aliceblue'
        }
      },
    }
);
class SideMenu extends Component {
  render() {
    return(
      <ScrollView>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            this.props.navigation.navigate('Home');
            this.props.navigation.closeDrawer();
          }
        }>
        <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            this.props.navigation.navigate('TabA');
            this.props.navigation.closeDrawer();
          }
        }>
        <Text style={styles.drawerText}>Tab-A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            this.props.navigation.navigate('TabB');
            this.props.navigation.closeDrawer();
          }
        }>
        <Text style={styles.drawerText}>Tab-B</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const DrawerNav = createDrawerNavigator(
    {
      Home: TabNav,
    },
    {
      contentComponent: SideMenu
    }
);
const AppContainer = createAppContainer(DrawerNav);
export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}