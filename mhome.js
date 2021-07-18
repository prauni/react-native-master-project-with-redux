export default class MHome extends Component {
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