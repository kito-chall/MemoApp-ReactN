import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>メモ帳</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>ITEM1</Text>
            <Text style={styles.memoDate}>2020/3/28</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>ITEM2</Text>
            <Text style={styles.memoDate}>2020/3/28</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>ITEM3</Text>
            <Text style={styles.memoDate}>2020/3/28</Text>
          </View>

        </View>
  
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
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
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 32,
    backgroundColor: '#00AEF0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.5,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  memoList: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    paddingTop: 80,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#ddd'
  },
  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: '#0295F5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.5,
    zIndex: 10,
  },
  addButtonText: {
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  }

});