import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//可根据实际情况封装不同Header，适应不同场景
class CommonHeader extends React.PureComponent {

    static propTypes = {
        centerTitle: PropTypes.string,
        isShowLeft: PropTypes.bool,
        leftOnPress: PropTypes.func,
        leftIconName: PropTypes.string,
    };

    static defaultProps = {
        centerTitle: 'Title',
        isShowLeft: true,
        leftOnPress: () => {},
        leftIconName: 'arrow-back',
    };

    _renderLeftComponent = () => (
        <MaterialIcons
            name={this.props.leftIconName}
            size={24}
            color={'#ffffff'}
            onPress={this.props.leftOnPress}
        />);

    render() {
        return (<Header statusBarProps={{barStyle: 'light-content'}}
                        leftComponent={this.props.isShowLeft
                            ? this._renderLeftComponent()
                            : {}}
                        centerComponent={{
                            text: this.props.centerTitle,
                            style: {color: '#fff', fontSize: 20},
                        }}/>);
    }
}

export {CommonHeader};