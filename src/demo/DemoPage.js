import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import BasePage from '../base/BasePage';
import LibContainer from '../lib/LibContainer';
import {Header} from 'react-native-elements';

export default class DemoPage extends BasePage {
    render() {
        return (
            <LibContainer style={styles.container}
                          topColor={'#496fc2'}
            >
                <Header
                    leftComponent={{icon: 'arrow-back', color: '#fff'}}
                    centerComponent={{
                        text: 'Demo Page',
                        style: {color: '#fff'},
                    }}
                />
                <Text style={{color: 'red', fontSize: 18}}>{'Demo Page'}</Text>
                <View style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'yellow',
                }}></View>
                <View style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'red',
                }}></View>
            </LibContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
    },
});
