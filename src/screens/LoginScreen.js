import React from 'react';
import { StyleSheet, View , Text, TextInput, TouchableHighlight } from 'react-native';

import firebase from 'firebase';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  loginSubmit () {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.props.navigation.navigate('MemoList');
        console.log('Login Success');
      })
      .catch((error) => {
        errorCode = error.code;
        errorCode = error.message;
        console.log(errorCode, ' : ', errorCode)
      }
    );
    console.log('Login')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>

        <TextInput 
          style={styles.input} 
          value={this.state.email}
          onChangeText={(text)=> {this.setState({email: text})}}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email Address'
        />

        <TextInput 
          style={styles.input} 
          value={this.state.password}
          onChangeText={(text)=> {this.setState({password: text})}}
          secureTextEntry
          placeholder='Password'
        />

        <TouchableHighlight
          onPress={() => this.loginSubmit(this)}
          style={styles.submitButton}
          underlayColor='#0073bf'
        >
          <Text style={styles.submitButtonText}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#000',
  },
  loginForm: {
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    height: 45,
    // color: '#787878',
    backgroundColor: '#ededed',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#dedede',
    padding: 8,
    borderRadius: 5,
  },
  submitButton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#0295F5',
    padding: 10,
    marginTop: 30,
    height: 42,
    width: '100%',
    borderRadius: 5,
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;