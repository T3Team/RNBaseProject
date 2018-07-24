import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import LibContainer from '../../../lib/LibContainer';
import {Avatar} from 'react-native-elements'; //https://react-native-training.github.io/react-native-elements/docs/overview.html文档可供参考，有一定滞后，具体组件使用可参考源码 - -
import BasePage from '../../../base/BasePage';

export default class TestAvatarPage extends BasePage {

    render() {
        return (
            <LibContainer style={styles.container}
                          isTabMode={true}
                          topColor={'#496fc2'}
            >

                {this._renderCommonHeader('Avatar')}
                <ScrollView>
                    <Avatar
                        small
                        rounded
                        source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'}}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        large
                        source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        xlarge
                        rounded
                        source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        rounded
                        title={'MY'}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        rounded
                        icon={{name: 'home'}}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{
                            flex: 2,
                            marginLeft: 20,
                            marginTop: 20,
                        }}
                    />
                    <Avatar
                        large
                        icon={{name: 'home', color: 'orange'}}
                        overlayContainerStyle={{backgroundColor: 'white'}}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{flex: 4, marginTop: 20}}
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
});