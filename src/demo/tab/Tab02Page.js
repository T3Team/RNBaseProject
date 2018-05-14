import React from 'react';
import {StyleSheet, View,} from 'react-native';
import BasePage from '../../base/BasePage';
import LibContainer from '../../lib/LibContainer';

export default class Tab02Page extends BasePage {
    render() {
        return (
            <LibContainer style={styles.container}
                          isTabMode={true}
            >
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'pink',
                }}></View>
            </LibContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
