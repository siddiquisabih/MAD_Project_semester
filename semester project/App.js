import React, { useEffect } from 'react';
import { View, Text, StatusBar, I18nManager, NativeModules, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';
import Routeskey from './src/navigation/routeskey';
import Splash from "./src/components/Splash/Splash"
import store from './src/store/index'
import { Provider } from "react-redux";
import PushNotification from 'react-native-push-notification';
// import messaging from '@react-native-firebase/messaging';
// import {NativeModules} from 'react-native'
// I18nManager.forceRTL(true);






class App extends React.Component {

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Provider store={store} >
          <NavigationContainer >
            <Routes initialRouteName={Routeskey.SPLASH} />
          </NavigationContainer>
        </Provider>
      </View>
    )
  }



}


export default App;


