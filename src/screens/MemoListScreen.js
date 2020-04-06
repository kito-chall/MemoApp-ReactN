import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [],
    }
  }

  componentDidMount () {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();

    db.collection(`users/${currentUser.uid}/memos`).orderBy('update_at', 'desc')
    .get()
    .then((querySnapshot) => {
      const memoList = [];
      querySnapshot.forEach((doc) => {
        memoList.push({ ...doc.data(), key: doc.id })   //objectの結合
      });
      this.setState({ memoList: memoList });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  handleCreateMemo () {
    this.props.navigation.navigate(
      'MemoCreate',　
      {refresh: this.componentDidMount.bind(this)}
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />

        <CircleButton 
          name='plus'
          onPress={this.handleCreateMemo.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  }
});

export default MemoListScreen;