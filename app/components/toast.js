import {Colors, Typography, iconAssets} from '../styles/index'
import {Platform,ToastAndroid} from 'react-native';

  export function HanwokToast(message){
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
  }
