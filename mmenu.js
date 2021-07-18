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

export default class StackScreen extends Component {
render() {
    return(
      <View style={styles.container}>
        <Text style={styles.infoText}>Stack Screen</Text>
      </View>
    );
  }
}

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


