import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
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

  handleEditSave() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key).update({
      title: this.state.title,
      body: this.state.body,
      update_at: firebase.firestore.Timestamp.now(),
    })
    .then(() => {
      console.log("Document successfully updated!");
      this.props.route.params.returnMemo(this.state);
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
  }

  render () {
    return (
      <View style={styles.container}>

        <TextInput 
          style={styles.editTitleInput} 
          value={this.state.title}
          onChangeText={(text)=>{this.setState({title: text})}}
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
          onPress={this.handleEditSave.bind(this)}
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
    fontSize: 15,
    lineHeight: 20,
    color: '#fff',
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  checkButton: {
    top: 50
  }
});

export default MemoEditScreen;