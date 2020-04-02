import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    console.log(this.props.memoList);
    return(
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>ITEM1</Text>
            <Text style={styles.memoDate}>2020/3/28</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>ITEM2</Text>
            <Text style={styles.memoDate}>2020/3/28</Text>
          </View>
          </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>ITEM3</Text>
            <Text style={styles.memoDate}>2020/3/28</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#3d3d3d',
    borderBottomWidth: 1,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,    
  },
  memoDate: {
    fontSize: 12,
    color: '#eee'
  },
})

export default MemoList;