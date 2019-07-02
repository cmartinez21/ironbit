import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import App from './screens/App';
import Home from './screens/Home';




const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  PantallaPrincipal: {
    screen: Home,
  },
}, {
initialRouteName: 'App',
});

export default createAppContainer(AppNavigator);
