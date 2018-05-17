import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import LibContainer from '../../../lib/LibContainer';
import {Button} from 'react-native-elements'; //https://react-native-training.github.io/react-native-elements/docs/overview.html文档可供参考，有一定滞后，具体组件使用可参考源码 - -
import BasePage from '../../../base/BasePage';

export default class TestElementsPage extends BasePage {

    render() {
        return (
            <LibContainer style={styles.container}
                          isTabMode={true}
                          topColor={'#496fc2'}
            >

                {this._renderCommonHeader('react-native-elements')}
                <ScrollView>
                    <Button
                        title={'avatar'}
                        buttonStyle={styles.btnStyle}
                        onPress={() => {this._navigateTo('TestAvatarPage');}}
                    />
                    <Button
                        title={'sample'}
                        buttonStyle={styles.btnStyle}
                        onPress={() => {this._navigateTo('TestSamplePage');}}
                    />
                    <Button
                        title={'card'}
                        buttonStyle={styles.btnStyle}
                        onPress={() => {this._navigateTo('TestCardPage');}}
                    />
                </ScrollView>
            </LibContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnStyle: {
        backgroundColor: 'pink',
        height: 48,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
    },
});