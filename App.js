import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase';
require("firebase/firestore");
import ENV from './env.json';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const firebaseConfig = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBASE_DB_URL,
  projectId:         ENV.FIREBASE_PROJECT_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId:             ENV.FIREBASE_APP_ID,
  measurementId:     ENV.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

class App extends React.Component {

  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Login'
          // headerMode="screen"
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#00AEF0', height: 80 },
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen 
            name='MemoList' component={MemoListScreen}
            options={{ title: 'Memo List',}}
          />
          <Stack.Screen 
            name='MemoDetail' component={MemoDetailScreen}
            options={{ title: 'Memo Detail',}}
          />
          <Stack.Screen 
            name='MemoCreate' component={MemoCreateScreen}
            options={{ 
              title: 'Memo Create', }}
          />
          <Stack.Screen 
            name='MemoEdit' component={MemoEditScreen}
            options={{ title: 'Memo Edit',}}
          />
          <Stack.Screen 
            name='Login' component={LoginScreen}
            options={{ title: 'Login',}}
          />
          <Stack.Screen 
            name='Signup' component={SignupScreen}
            options={{ title: 'Signup',}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
});

export default App;