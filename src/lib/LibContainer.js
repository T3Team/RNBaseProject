import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Platform, SafeAreaView, View,} from 'react-native';

const {width, height} = Dimensions.get('window');
const isNotIPhoneX = (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    !(width === 812 || height === 812)
);
export default class LibContainer extends React.PureComponent {
    static propTypes = {
        topColor: PropTypes.string,
        bottomColor: PropTypes.string,
    };

    static defaultProps = {
        topColor: '#ffffff',
        bottomColor: '#ffffff',
    };

    render() {
        return (
            <View
                {...this.props}
            >
                <View style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: 44,
                    backgroundColor: this.props.topColor,
                }}/>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: isNotIPhoneX ? 0 : 34,
                    backgroundColor: this.props.bottomColor,
                }}/>
                <SafeAreaView
                    style={{flex: 1}}
                >
                    {this.props.children}
                </SafeAreaView>
            </View>
        );
    }
}