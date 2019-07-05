import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import App from './screens/App';
import Home from './screens/Home';
import Move from './screens/Move';




const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  Move: {
    screen: Move
  },
  PantallaPrincipal: {
    screen: Home,
  },
}, {
initialRouteName: 'App',
});

export default createAppContainer(AppNavigator);
