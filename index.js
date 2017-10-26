import {
  Linking,
  Platform,
  NativeModules
} from 'react-native';

const RNMarketCommentModule = NativeModules.RNMarketCommentModule;

export default function openAppStoreToComment (appId) {
  if (Platform.OS === 'ios') {
    const url = `itms-apps://itunes.apple.com/app/id${appId}?mt=8&action=write-review`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
    return;
  }
  if (Platform.OS === 'android') {
    RNMarketCommentModule.show();
  }
}
