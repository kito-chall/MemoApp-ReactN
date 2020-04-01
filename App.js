import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='MemoList'
        // headerMode="screen"
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#00AEF0', height: 80 },
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
});

export default App;