import React from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ImageWithProgress from 'react-native-image-progress'; // https://github.com/oblador/react-native-image-progress
import Circle from 'react-native-progress';
import LibContainer from '../../lib/LibContainer';
import Images from '../../resource/Images';
import BasePage from '../../base/BasePage';

export default class ImagePage extends BasePage {

    render() {
        return (
            <LibContainer
                topColor={'#496fc2'}
            >
                {this._renderCommonHeader('图片')}
                <ScrollView style={styles.container}>
                    <Text>加载网络图片（注意：静态图片不需要指定大小。但网络图片需要）</Text>
                    <ImageWithProgress
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2017/01/19/12/05/cat-1992140_1280.jpg#' +
                            Math.random(),
                        }}
                        indicator={Circle}
                        indicatorProps={{color: '#cccccc'}}
                        style={{width: 300, height: 150}}/>
                    <View style={styles.blank}/>

                    <Text>加载网络图片：占位符(Android系统无效) 项目中加载网络图片暂时使用此方式</Text>
                    <ImageWithProgress
                        defaultSource={Images.demoImages.bgImg}
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2017/01/19/12/05/cat-1992140_1280.jpg#' +
                            Math.random(),
                        }}
                        indicator={Circle}
                        indicatorProps={{color: '#cccccc'}}
                        style={{width: 300, height: 150}}/>
                    <View style={styles.blank}/>

                    <Text>加载静态本地图片:开发模式不用重新编译，只用修改js代码刷新模拟器即可</Text>
                    <Image source={Images.demoImages.dogImg}/>
                    <View style={styles.blank}/>

                    <Text>cover模式：在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。</Text>
                    <Image source={Images.demoImages.dogImg} style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#cccccc',
                    }} resizeMode={Image.resizeMode.cover}/>
                    <View style={styles.blank}/>

                    <Text>contain模式:在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白</Text>
                    <Image source={Images.demoImages.dogImg} style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#cccccc',
                    }} resizeMode={Image.resizeMode.contain}/>
                    <View style={styles.blank}/>

                    <Text>stretch模式:拉伸图片且不维持宽高比，直到宽高都刚好填满容器。</Text>
                    <Image source={Images.demoImages.dogImg} style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#cccccc',
                    }} resizeMode={Image.resizeMode.stretch}/>
                    <View style={styles.blank}/>

                    <Text>圆角</Text>
                    <Image source={Images.demoImages.dogImg}
                           style={{width: 114, height: 84, borderRadius: 20}}
                           resizeMode={Image.resizeMode.cover}/>
                    <View style={styles.blank}/>

                    <Text>描边</Text>
                    <Image source={Images.demoImages.dogImg} style={{
                        width: 114,
                        height: 84,
                        borderWidth: 4,
                        borderColor: '#ff0000',
                    }} resizeMode={Image.resizeMode.cover}/>
                    <View style={styles.blank}/>

                    <Text>透明</Text>
                    <Image source={Images.demoImages.dogImg}
                           style={{width: 114, height: 84, opacity: 0.5}}
                           resizeMode={Image.resizeMode.cover}/>
                    <View style={styles.blank}/>

                    <Text>背景图使用</Text>
                    <ImageBackground source={Images.demoImages.dogImg}
                                     style={{
                                         width: 114,
                                         height: 84,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     }} resizeMode={Image.resizeMode.cover}>
                        <Text
                            style={{
                                backgroundColor: 'transparent',
                                color: 'red',
                            }}>
                            我是文字
                        </Text>
                    </ImageBackground>
                    <View style={styles.blank}/>

                    <Text>改变图片颜色</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={Images.demoImages.zhanImg}/>
                        <Image source={Images.demoImages.zhanImg}
                               style={{tintColor: 'red'}}/>
                        <Image source={Images.demoImages.zhanImg}
                               style={{tintColor: '#ff2d55'}}/>
                        <Image source={Images.demoImages.zhanImg}
                               style={{tintColor: '#cc5ac8fa'}}/>
                    </View>
                    <View style={styles.blank}/>

                    <Text>加载gif动画（Android系统无效）</Text>
                    <Image source={Images.demoImages.hanImg}
                           style={{width: 80, height: 80}}/>
                    <View style={styles.blank}/>

                </ScrollView>
            </LibContainer>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    blank: {
        height: 20,
    },
    button: {
        height: 30,
        width: 150,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // overflow属性规定当内容溢出元素框时发生的事情 http://www.w3school.com.cn/cssref/pr_pos_overflow.asp
        borderRadius: 4,
        backgroundColor: '#057afb',
    },
    button_text: {
        fontSize: 14,
        color: 'white',
    },
});
