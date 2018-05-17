import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import LibContainer from '../../../lib/LibContainer';
import {
    Badge,
    Divider,
    PricingCard,
    Text,
    SearchBar,
    Rating,
    CheckBox,
} from 'react-native-elements'; //https://react-native-training.github.io/react-native-elements/docs/overview.html文档可供参考，有一定滞后，具体组件使用可参考源码 - -
import BasePage from '../../../base/BasePage';

export default class TestSamplePage extends BasePage {

    render() {
        return (
            <LibContainer style={styles.container}
                          isTabMode={true}
                          topColor={'#496fc2'}
            >
                {this._renderCommonHeader('Sample')}
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Badge
                        value={3}
                        textStyle={{color: 'red'}}
                    />

                    <Divider style={{
                        backgroundColor: 'red',
                        height: StyleSheet.hairlineWidth,
                        width: '50%',
                    }}/>
                    <PricingCard
                        color='#4f9deb'
                        title='Free'
                        price='$0'
                        info={['1 User', 'Basic Support', 'All Core Features']}
                        button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
                    />
                    <Text h1>Heading 1</Text>
                    <Text h2>Heading 2</Text>
                    <Text h3>Heading 3</Text>
                    <Text h4>Heading 4</Text>
                    <SearchBar
                        platform="ios"
                        onChangeText={() => {}}
                        onClear={() => {}}
                        placeholder='Type Here...'/>
                    <Rating
                        type='heart'
                        ratingCount={3}
                        imageSize={60}
                        showRating
                        onFinishRating={this.ratingCompleted}
                    />
                    <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={3.6}
                        imageSize={20}
                        onFinishRating={this.ratingCompleted}
                        style={{paddingVertical: 10}}
                    />
                    <CheckBox
                        title='Click Here'
                        checked={false}
                    />
                    <CheckBox
                        title='Click Here'
                        checked={true}
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