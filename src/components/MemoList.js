import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class MemoList extends React.Component {
  renderMemo (data) {
    const { item } = data;
    return (
      <TouchableHighlight 
        onPress={() => {this.props.navigation.navigate('MemoDetail')}}
      >
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.title}</Text>
          <Text style={styles.memoDate}>2020/4/2</Text>
        </View>
      </TouchableHighlight>
    );
  }
  
  render() {
    return(
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
        />
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