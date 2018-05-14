import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import BasePage from '../../base/BasePage';
import LibContainer from '../../lib/LibContainer';

export default class HeaderMainPage extends BasePage {
    render() {
        return (
            <LibContainer style={styles.container}>
                <Header
                    leftComponent={{icon: 'arrow-back', color: '#fff'}}
                    centerComponent={{
                        text: 'Header Main Page',
                        style: {color: '#fff'},
                    }}
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
