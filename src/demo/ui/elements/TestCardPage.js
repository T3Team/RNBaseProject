import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import LibContainer from '../../../lib/LibContainer';
import {Button, Card, Icon} from 'react-native-elements'; //https://react-native-training.github.io/react-native-elements/docs/overview.html文档可供参考，有一定滞后，具体组件使用可参考源码 - -
import BasePage from '../../../base/BasePage';
import Images from '../../../resource/Images';

export default class TestCardPage extends BasePage {

    render() {
        return (
            <LibContainer style={styles.container}
                          isTabMode={true}
                          topColor={'#496fc2'}
            >

                {this._renderCommonHeader('Card')}
                <ScrollView>
                    <Card
                        title='Simple Card'
                        image={Images.demoImages.skyImgPixabay}
                    >
                        <Text style={{marginBottom: 10}}>
                            {`The idea with React Native Elements is more about component structure than actual design.`}
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff'/>}
                            backgroundColor='#03A9F4'
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title='view now'/>
                    </Card>
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