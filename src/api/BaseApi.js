import md5 from 'blueimp-md5';
import Axios from 'axios';
import EventBus from 'pubsub-js'; // https://github.com/mroderick/PubSubJS
import DevUtil from '../util/DevUtil';
import Const from '../constant/Const';
import EventName from '../constant/EventName';
import ApiCode from '../constant/ApiCode';

export default class BaseApi {
    static get(url, param) {
        return this.request('get', url, param);
    }

    static post(url, from) {
        return this.request('post', url, from);
    }

    static async request(method, url, param) {
        let isOk;
        let errorMessage;
        let response;
        let time = Date.now();
        let token = 'token';  //TODO add
        let language = 'en';   //TODO add
        let header = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                token: token,
                language: language,
            },
        };
        try {
            if (method === 'get') {
                // url encode
                var logParam = '';
                for (var key in param) {
                    // param[key] = encodeURIComponent(param[key]);
                    logParam = logParam + '&' + key + '=' + param[key];
                }
                DevUtil.v('http',
                    `${time}:${this.getSignatureUrl(url) + logParam}`);
                response = await Axios.get(this.getSignatureUrl(url) + logParam,
                    header);
            } else {
                DevUtil.v('http', `${time}:${this.getSignatureUrl(
                    url)} -[${method}]- params:${JSON.stringify(param)}`);
                response = await Axios.post(this.getSignatureUrl(url), param,
                    header);
            }

            if (response.status === ApiCode.API_SUCCESS) {
                isOk = true;
                if (response.data.code === ApiCode.TOKEN_EXPIRED) { // token失效或者帐户过期
                    DevUtil.v('http',
                        `${time}:${JSON.stringify(response.data)}`);
                    setTimeout(() => {
                        EventBus.publish(EventName.API_TOKEN_EXPIRED);
                    }, 200);// 延迟跳转 避免卡顿
                    return new Promise(
                        (resolve, reject) => { reject('您的帐户已失效，请重新登录'); });
                }
            } else {
                isOk = false;
                errorMessage = response.data;
            }
        } catch (error) {
            isOk = false;
            if (error.data == undefined) {
                errorMessage = Const.NETWORK_ERROR;
            } else {
                errorMessage = error.data;
            }
        }

        return new Promise((resolve, reject) => {
            if (isOk) {
                DevUtil.v('http',
                    `${time}:${JSON.stringify(response.data)}`);
                resolve(response.data);
            } else {
                DevUtil.v('http',
                    `${time}:${JSON.stringify(errorMessage)}`);
                if (errorMessage == undefined) {
                    errorMessage = Const.NETWORK_ERROR;
                }
                reject(errorMessage);
            }
        });
    }

    static getSignatureUrl(url) {
        let ret;
        let key = 'testtsx'; //TODO 按需设置
        let time = Date.now();
        let sign = md5(time + key);
        ret = `${url}?isApp=1&_time=${time}&_sign=${sign}`;//TODO 按需设置

        return ret;
    }
}
