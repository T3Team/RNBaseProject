import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';//https://ionicframework.com/docs/ionicons/
import Tab01Page from './tab/Tab01Page';
import Tab02Page from './tab/Tab02Page';
import DemoPage from './DemoPage';

const tabBarIcon = name => ({tintColor, focused}) => (
    <Ionicons name={focused ? name : `${name}-outline`} color={tintColor}
              size={24}/>
);
const tabBarOptionsConfig = {
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 14,
        },
        showLabel: true, // Whether to show label for tab, default is true.
        style: {
            //Style object for the tab bar.
        },
    },
};

const DemoRouteConfigs = {
    Tab01Page: {
        screen: Tab01Page,
        navigationOptions: {
            tabBarIcon: tabBarIcon('ios-home'),
            tabBarLabel: 'Home',
        },
    },
    Tab02Page: {
        screen: Tab02Page,
        navigationOptions: {
            tabBarIcon: tabBarIcon(
                'ios-game-controller-b'),
            tabBarLabel: 'Game',
        },
    },
    DemoPage: {
        screen: DemoPage, navigationOptions: {
            tabBarIcon: tabBarIcon(
                'ios-headset'),
            tabBarLabel: 'Demo',
        },
    },
};
const RouteConfigs = {
    ...DemoRouteConfigs,
};
const BottomTabNavigatorConfig = {
    initialRouteName: 'DemoPage',
    ...tabBarOptionsConfig
};
export default DemoTabNavigator = createBottomTabNavigator(
    RouteConfigs,
    BottomTabNavigatorConfig,
);