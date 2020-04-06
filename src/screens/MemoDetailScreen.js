import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';
import { getParsedDate } from '../Lib/common';

class MemoDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    const { params } = props.route;
    this.state = {
      title: params.title,
      body: params.body,
      create_at: params.create_at,
      update_at: params.update_at,
      key: params.key,
    }
  }

  returnMemo(params) {
    this.setState(params);
  }

  render() {
    const item = this.props.route.params;
    return(
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{this.state.title}</Text>
            <Text style={styles.memoHeaderDate}>作成日時: { getParsedDate(this.state.create_at) }</Text>
            <Text style={styles.memoHeaderDate}>更新日時: { getParsedDate(this.state.update_at) }</Text>
          </View>
        </View>

        <CircleButton 
          name='pencil'
          color='#0295F5' 
          style={styles.editButton}
          onPress={() => {
            this.props.navigation.navigate(
              'MemoEdit', { ...item, returnMemo: this.returnMemo.bind(this)}
            )}}
        />

        <View style={styles.memoContent}>
          <Text style={styles.memoContentText}>
            {this.state.body}
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
    backgroundColor: '#000',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#044c7d',
    justifyContent: 'center',
    paddingLeft: 20,
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.5,
    zIndex: 9,
  },
  memoHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#eee',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#000',
    flex: 1,
  },
  memoContentText: {
    color: '#fff',
    lineHeight: 20,
    fontSize: 15,
  },
  editButton: {
    top: 75,
  }
});

export default MemoDetailScreen;