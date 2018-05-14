#!/usr/bin/env bash

#fix RN0.45bug Could not list contents of '.........../node_modules/react-native/third-party/glog-0.3.4/test-driver'. Couldn't follow symbolic link.
#https://github.com/facebook/react-native/issues/14464
if [ -L "node_modules/react-native/third-party/glog-0.3.4/test-driver" ]; then
    unlink "node_modules/react-native/third-party/glog-0.3.4/test-driver"
fi

echo "cd ./android; ./gradlew assembleRelease"
cd ./android; ./gradlew assembleRelease
