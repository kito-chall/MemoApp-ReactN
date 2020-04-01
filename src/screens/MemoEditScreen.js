import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.editInput} 
          multiline
          value='hi'
        />

        <CircleButton
          name='check'
          onPress={() => {this.props.navigation.navigate('MemoDetail')}}
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
  editInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingTop: 32, 
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default MemoEditScreen;