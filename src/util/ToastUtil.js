import Toast from 'react-native-root-toast';

/**
 *  yarn add redux
 * Unable to resolve module `redux` from `path/to/node_modules/react-redux/lib/connect/mapDispatchToProps.js`: Module does not exist in the module map
 This might be related to https://github.com/facebook/react-native/issues/4968
 */
export default class ToastUtil {
    static show(message, position = Toast.positions.BOTTOM) {
        if (typeof message === 'string') {
            Toast.show(message, {
                duration: Toast.durations.SHORT,
                position: position,
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        }
    }

    static showCenter(message, duration = Toast.durations.SHORT) {
        if (typeof message === 'string') {
            Toast.show(message, {
                duration: duration,
                position: Toast.positions.CENTER,
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        }
    }

    static showTop(message) {
        if (typeof message === 'string') {
            Toast.show(message, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        }
    }
}
