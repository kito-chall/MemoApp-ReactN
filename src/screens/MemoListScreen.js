import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  handleCreateMemo () {
    const { params } = this.props.route;
    this.props.navigation.navigate(
      'MemoCreate',
      params
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />

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