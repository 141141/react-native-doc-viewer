
import { NativeModules } from 'react-native';
const RNReactNativeDocViewer = NativeModules.RNReactNativeDocViewer;
export default {
  openDoc: RNReactNativeDocViewer.openDoc,
  openDocb64: RNReactNativeDocViewer.openDocb64,
  testModule: RNReactNativeDocViewer.testModule
}
