import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PageRegister from './src/PageRegister';
import I18n from './src/translations/I18n';

export default class App extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //暂时屏蔽警告信息，以后等第三方包升级后再打开，升级RN到版本很多第三方包报"isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks"
        console.disableYellowBox = true;
    }

    componentDidMount() {
        I18n.locale = 'zh';
    }

    _renderAppPageRegister = () => {
        return (<PageRegister/>);
    };

    render() {
        return (
            <View style={{flex: 1}}>
                {this._renderAppPageRegister()}
            </View>
        );
    }
}


