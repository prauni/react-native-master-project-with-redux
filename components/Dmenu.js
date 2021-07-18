import React, { Component } from 'react';
import { Button } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import MyHomeScreen from './screen/Home';
import MyNotificationsScreen from './screen/Skill';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: navigationOptionsHeader
  }
);

const navigationOptionsHeader = ({ navigation }) => {
  return {
    headerTitle: 'MY Home',
    headerRight: (
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Info"
        color="#222"
      />
    )
  };
};

const AppContainer = createAppContainer(MyDrawerNavigator);

class Dmenu extends Component {
  render() {
    return <AppContainer />;
  }
}
export default Dmenu;
