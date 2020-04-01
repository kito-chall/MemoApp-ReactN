import React from 'react';
import { StyleSheet, View , Text, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
  onPressSubmit () {
    console.log('押されました');  
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ユーザー登録</Text>

        <TextInput 
          style={styles.input} 
          value='EmailAdress'
        />

        <TextInput 
          style={styles.input} 
          value='Password'
        />

        <TouchableHighlight
          onPress={() => this.onPressSubmit()}
          style={styles.submitButton}
          underlayColor='#0073bf'
        >
          <Text style={styles.submitButtonText}>登録する</Text>
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
    color: '#787878',
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

export default SignupScreen;