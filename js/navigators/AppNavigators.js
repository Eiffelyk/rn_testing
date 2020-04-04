import React from 'react';
import {Button, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name={'ios-home'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'orange' : 'blue'}}>Page 2</Text>
        ),
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-people'}
            size={26}
            style={{color: focused ? 'orange' : 'blue'}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  },
);
const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name={'ios-home'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: 'Page2',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-people'}
            size={26}
            style={{color: focused ? 'orange' : 'blue'}}
          />
        ),
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: 'Page3',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-people'}
            size={26}
            style={{color: focused ? 'orange' : 'blue'}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      // activeTintColor: 'red',
      tabStyle: {
        minWidth: 50,
        // backgroundColor: '#FFFF00',
      },
      upperCaseLabel: false,
      style: {
        backgroundColor: '#FF6700',
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#00FF00',
      },
      labelStyle: {
        fontSize: 40,
        color: '#0000FF',
      },
    },
  },
);
export const AppStackNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage, //HomePage
      navigationOptions: {
        title: '主页',
      },
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator, //HomePage
      navigationOptions: {
        title: '底部导航器',
      },
    },
    MaterialTopTabNavigator: {
      screen: MaterialTopTabNavigator, //HomePage
      navigationOptions: {
        title: '顶部导航器',
      },
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params && navigation.state.params.name + '页面',
        headerBackTitle: 'HeaderBack', //不生效
        headerBackTitleVisible: true, //不生效
        headerTruncatedBackTitle: 'title', //不生效
      }),
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        headerShown: true,
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: props => {
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params = {}} = state;
        return {
          title: params.name ? params.name : 'This is Page 3',
          headerRight: (
            <Button
              title={params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() => {
                setParams({mode: params.mode === 'edit' ? '' : 'edit'});
              }}
            />
          ),
        };
      },
    },
  },
  {
    defaultNavigationOptions: {},
  },
);
