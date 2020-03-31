import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Appbar />
        {/* <MemoListScreen /> */}
        {/* <MemoDetailScreen /> */}
        <MemoEditScreen />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
});