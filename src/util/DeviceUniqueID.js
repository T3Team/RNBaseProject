import SInfo from 'react-native-sensitive-info';
import DeviceInfo from 'react-native-device-info';
import {
    Platform,
} from 'react-native';
import DevUtil from './DevUtil';

/**
 *具体的包名等
 */
const IOS_BUNDLE_IDENTIFIER = 'com.xxx.yyy';
const ANDROID_PACKAGE_NAME = 'com.xxx.yyy';
const KEY_NAME = 'xyz_deviceUniqueID';
export default class DeviceUniqueID {

    static saveDeviceUniqueID = (uuid) => {
        SInfo.setItem(KEY_NAME, uuid, {
            sharedPreferencesName: ANDROID_PACKAGE_NAME,
            keychainService: IOS_BUNDLE_IDENTIFIER,
        }).then((value) => {
                DevUtil.v('uuid', `add ${value}`);
            },
        );
    };
    static getDeviceUniqueID = (callback = () => {}) => {
        SInfo.getItem(KEY_NAME, {
            sharedPreferencesName: ANDROID_PACKAGE_NAME,
            keychainService: IOS_BUNDLE_IDENTIFIER,
        }).then((value) => {
                if (value == null || value === undefined) {
                    let uuid = '';
                    if (Platform.OS === 'ios') {
                        uuid = DeviceInfo.getUniqueID();
                    } else {
                        uuid = DeviceInfo.getUniqueID();
                    }
                    DeviceUniqueID.saveDeviceUniqueID(uuid);
                    value = uuid;
                }
                DevUtil.v('uuid', `get ${value}`);
                callback(value);
            },
        );
    };
}
