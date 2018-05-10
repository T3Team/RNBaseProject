import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import BasePage from '../../base/BasePage';
import LibContainer from '../../lib/LibContainer';

export default class Tab02Page extends BasePage {
    render() {
        return (
            <LibContainer style={styles.container}
                          topColor={'#496fc2'}
            >
                <Text style={{color: 'red', fontSize: 18}}>{'Tab02 Page'}</Text>
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
