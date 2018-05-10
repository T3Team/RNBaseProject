import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'; //https://reactnavigation.org/
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import BasePage from './base/BasePage';
import DemoPage from './demo/DemoPage';
import HeaderMainPage from './demo/header/HeaderMainPage';
import Tab01Page from './demo/tab/Tab01Page';
import Tab02Page from './demo/tab/Tab02Page';

export default class PageRegister extends BasePage {

    componentWillMount() {
        super.componentWillMount();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        return (
            <MyStackNavigator/>
        );
    }
}
const DemoRouteConfigs = {
    DemoPage: {screen: DemoPage},
    HeaderMainPage: {screen: HeaderMainPage},
    Tab01Page: {screen: Tab01Page},
    Tab02Page: {screen: Tab02Page},
};
const RouteConfigs = {
    ...DemoRouteConfigs,
};
const NavigationConfig = {
    headerMode: 'none',
    transitionConfig: () => ({// 页面换场属性
        screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    navigationOptions: {
        gesturesEnabled: false// 页面手势返回功能，iOS默认打开，android默认关闭，这里全部打开
    },
};
const MyStackNavigator = createBottomTabNavigator(
    RouteConfigs,
    {
        initialRouteName: 'DemoPage',
        ...NavigationConfig,
    },
);
