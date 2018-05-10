export default class DevUtil {
    /**
     * 日志输出，以yourName为筛选条件
     * @param yourName
     * @param message
     */
    static v(yourName, message) {
        console.log(`${message} - RNtag:${yourName}`);
    }

    static e(yourName, message) {
        console.log(`error - ${message} - RNtag:${yourName}`);
    }

    static isDebug() {
        return __DEV__;
    }
}
