import React from 'react';
import {StyleSheet,} from 'react-native';
import BasePage from '../base/BasePage';
import LibContainer from '../lib/LibContainer';
import {Button,} from 'react-native-elements';

export default class DemoPage extends BasePage {

    render() {
        return (
            <LibContainer style={styles.container}
                          isTabMode={true}
                          topColor={'#496fc2'}
            >

                {this._renderCommonHeader('Demo', false)}
                <Button
                    title={'react-native-elements'}
                    buttonStyle={{
                        backgroundColor: 'pink',
                        height: 48,
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={() => {this._navigateTo('TestElementsPage');}}
                />
                <Button
                    title={'图片(Image)'}
                    buttonStyle={{
                        backgroundColor: 'pink',
                        height: 48,
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={() => {this._navigateTo('ImagePage');}}
                />
                <Button
                    title={'Header'}
                    buttonStyle={{
                        backgroundColor: 'pink',
                        height: 48,
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={() => {this._navigateTo('HeaderMainPage');}}
                />
                <Button
                    title={'http'}
                    buttonStyle={{
                        backgroundColor: 'pink',
                        height: 48,
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={() => {this._navigateTo('CallApiPage');}}
                />
            </LibContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
