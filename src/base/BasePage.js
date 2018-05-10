import React from 'react';

let _this;
let _lastBackPressed;
let _isTokenExpiredJump = false;
export default class BasePage extends React.PureComponent {

    constructor(props) {
        super(props);
        _this = this;
    }

    componentWillMount() {
        //TODO add 统计相关等
    }

    componentWillUnmount() {
        //TODO  add 统计相关等
    }

    /**页面跳转**/

    _goBack = () => {
        this.props.navigation.goBack();
    };

    _goBackWithKey = (key) => {
        this.props.navigation.goBack(key);
    };

    /**
     * 页面跳转
     * @param page  字符串  在PageRegister.js中MyStackNavigator注册
     * @private
     */
    _navigateTo(page) {
        this.props.navigation.navigate(page);
    }

    /**
     * 页面跳转并传值
     * @param page 字符串  在PageRegister.js中MyStackNavigator注册
     * @param data json格式数据  {code:1,name:'test'}
     * @private
     */
    _navigateWithData(page, data) {
        this.props.navigation.navigate(page, data);
    }

    /**
     * 页面跳转
     * @param page  字符串  在PageRegister.js中MyStackNavigator注册
     * @private
     */
    _pushTo(page) {
        this.props.navigation.push(page);
    }

    /**
     * 页面跳转并传值
     * @param page 字符串  在PageRegister.js中MyStackNavigator注册
     * @param data json格式数据  {code:1,name:'test'}
     * @private
     */
    _pushWithData(page, data) {
        this.props.navigation.push(page, data);
    }

    /**获取页面传值**/
    _getPageParam(paramName, defaultValue) {
        return this.props.navigation.getParam(paramName, defaultValue);
    }
}