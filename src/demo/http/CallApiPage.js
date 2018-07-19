import React from 'react';
import {StyleSheet, Text,} from 'react-native';

import {Button,} from 'react-native-elements';

import LibContainer from '../../lib/LibContainer';
import TestApi from '../../api/TestApi';
import BasePage from '../../base/BasePage';
import ToastUtil from '../../util/ToastUtil';
import I18n from '../../translations/I18n';
import DeviceUniqueID from '../../util/DeviceUniqueID';

export default class CallApiPage extends BasePage {
    state = {
        getText: '',
        deviceUniqueID: '',
    };

    componentWillMount() {
        DeviceUniqueID.getDeviceUniqueID((value) => {
            this.setState({deviceUniqueID: value});
        });
    }

    render() {
        return (
            <LibContainer style={styles.container}>
                <Button
                    title={'get测试数据'}
                    buttonStyle={{
                        backgroundColor: 'pink',
                        height: 48,
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={this._get.bind(this)}
                />
                <Text>
                    {`设备唯一标识${this.state.deviceUniqueID}`}
                </Text>
                <Text>
                    {this.state.getText}
                </Text>
            </LibContainer>

        );
    }

    async _get() {
        try {
            this.setState({getText: 'loading...'});
            let response = await TestApi.getTestRN();
            this.setState({getText: JSON.stringify(response.data)});
            ToastUtil.show(JSON.stringify(response.data));
            ToastUtil.show(I18n.t('testText'));
        } catch (error) {
            ToastUtil.show(error);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});
