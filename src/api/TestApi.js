import BaseApi from './BaseApi.js';

const host = 'https://www.easy-mock.com/mock/5b3b0cc5f8fe91076b33efff/example';
export default class TestApi extends BaseApi {

    static getTestRN() {
        let param = {};
        return super.get(`${host}/testRN`, param);
    }
}
