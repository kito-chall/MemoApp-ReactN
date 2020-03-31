import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>Item1</Text>
            <Text style={styles.memoHeaderDate}>2020/3/28</Text>
          </View>
        </View>

        <CircleButton 
          name='pencil'
          color='#0295F5' 
          style={styles.editButton}
        />

        <View style={styles.memoContent}>
          <Text style={styles.memoContentText}>
            メモの中身
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingLeft: 20,
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.5,
    zIndex: 9,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d3d3d',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#3d3d3d',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoContentText: {
    color: '#3d3d3d',
  },
  editButton: {
    top: 75,
    backgroundColor: '#fff',
  }
});

export default MemoDetailScreen;