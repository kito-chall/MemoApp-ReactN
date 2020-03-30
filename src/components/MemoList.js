import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return(
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
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  memoTitle: {
    color: '#3d3d3d',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,    
  },
  memoDate: {
    fontSize: 12,
    color: '#3d3d3d'
  },
})

export default MemoList;