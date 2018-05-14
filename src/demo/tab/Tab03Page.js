import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import BasePage from '../../base/BasePage';
import LibContainer from '../../lib/LibContainer';

export default class Tab03Page extends BasePage {
    render() {
        return (
            <LibContainer style={styles.container}
            >
                <TouchableOpacity style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'lightpink',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => this._navigateTo('DemoTabNavigator')}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 24,
                    }}>{'click me'}</Text>
                </TouchableOpacity>
            </LibContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
