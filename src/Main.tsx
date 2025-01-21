import 'react-native-gesture-handler';

import { View, Text, StatusBar, Platform } from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Navigation from './navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

GoogleSignin.configure({
    webClientId: "180275530667-jlhn4tip3ha64c9ca3sr2dvp61av0m85.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
    offlineAccess: false,
    iosClientId: "180275530667-5t359b0njhu9pkan9b1e78m75fhu4iag.apps.googleusercontent.com",
});


const Main = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        translucent={Platform.OS === 'ios'}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default Main