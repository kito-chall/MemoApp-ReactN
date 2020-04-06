import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton'


class MemoCreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'test',
      body: 'test',
      key: '',
      create_at: '',
      update_at: '',
      key: '',
    }
  }

  handleCreateMemo() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const newDate = new Date()
    db.collection(`users/${currentUser.uid}/memos`).add({
      title: this.state.title,
      body: this.state.body,
      create_at: newDate,  //firebase.firestore.Timestamp.now();
      update_at: newDate,
      email: currentUser.email
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      this.setState({
        create_at: newDate,
        update_at: newDate,
        key: docRef.id
      })
      this.props.route.params.refresh();
      this.props.navigation.goBack();
    })
    .catch((error) => {
        console.log("Error adding document: ", error);
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <Text style={styles.dateText}>2020/4/2</Text>
        </View>

        <TextInput 
          style={styles.editTitleInput} 
          value={this.state.title}
          onChangeText={(text)=>{this.setState({ title: text })}}
          placeholder='Title'
          placeholderTextColor='#3d3d3d'
        />

        <TextInput 
          style={styles.editBodyInput} 
          multiline
          value={this.state.body}
          onChangeText={(text) => {this.setState({ body:text })}}
          placeholder='Text'
          placeholderTextColor='#3d3d3d'
        />

        <CircleButton
          name='check'
          style={styles.checkButton}
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
  },
  date: {
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#eee',
  },
  editTitleInput: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 18, 
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  editBodyInput: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  checkButton: {
    top: 50
  }
});

export default MemoCreateScreen;