import React from 'react';
import {createStackNavigator,} from 'react-navigation'; //https://reactnavigation.org/
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import BasePage from './base/BasePage';
import DemoTabNavigator from './demo/DemoTabNavigator';
import Tab03Page from './demo/tab/Tab03Page';
import ImagePage from './demo/imgage/ImagePage';
import HeaderMainPage from './demo/header/HeaderMainPage';
import TestElementsPage from './demo/ui/elements/TestElementsPage';
import TestAvatarPage from './demo/ui/elements/TestAvatarPage';
import TestSamplePage from './demo/ui/elements/TestSamplePage';
import TestCardPage from './demo/ui/elements/TestCardPage';

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
    DemoTabNavigator: {screen: DemoTabNavigator},
    Tab03Page: {screen: Tab03Page},
    ImagePage: {screen: ImagePage},
    HeaderMainPage: {screen: HeaderMainPage},
    TestElementsPage: {screen: TestElementsPage},
    TestAvatarPage: {screen: TestAvatarPage},
    TestSamplePage: {screen: TestSamplePage},
    TestCardPage: {screen: TestCardPage},
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
        gesturesEnabled: false,// 页面手势返回功能，iOS默认打开，android默认关闭，这里全部关闭
    },
};
const MyStackNavigator = createStackNavigator(
    RouteConfigs,
    {
        initialRouteName: 'Tab03Page',
        ...NavigationConfig,
    },
);
