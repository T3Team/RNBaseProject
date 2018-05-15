import React from 'react';
import {StyleSheet} from 'react-native';
import BasePage from '../../base/BasePage';
import LibContainer from '../../lib/LibContainer';
import {CommonHeader} from '../../lib/LibHeader';

export default class HeaderMainPage extends BasePage {

    render() {
        return (
            <LibContainer style={styles.container}
                          topColor={'#496fc2'}
            >
                <CommonHeader
                    centerTitle={'普通Header'}
                    leftOnPress={() => this.props.navigation.goBack()}
                />
                <CommonHeader
                    centerTitle={'list icon'}
                    leftIconName={'list'}
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
