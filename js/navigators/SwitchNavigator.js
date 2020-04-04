import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../pages/HomePage';
import Page3 from '../pages/Page3';
import Login from '../pages/Login';
const AppStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
  },
  Page3: {
    screen: Page3,
  },
});
const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
  },
});

export default createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
});
