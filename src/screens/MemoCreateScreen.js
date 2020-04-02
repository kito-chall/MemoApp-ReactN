import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';
require("firebase/firestore");

import CircleButton from '../elements/CircleButton'


class MemoCreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyText: ''
    }
  }

  handleTextSave() {
    const { params } = this.props.route;
    const db = firebase.firestore();
    db.collection(`users/${params.user.uid}/memos`).add({
      title: "test title2",
      body: this.state.bodyText,
      create_at: new Date(),
      email: params.user.email
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.props.navigation.goBack();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.bodyInput} 
          multiline
          value={this.state.bodyText}
          onChangeText={(text) => {this.setState({ bodyText:text })}}
        />

        <CircleButton
          name='check'
          style={styles.checkButton}
          onPress={this.handleTextSave.bind(this)}
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
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingTop: 32, 
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  checkButton: {
    top: 10
  }
});

export default MemoCreateScreen;