import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    return(
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>メモ帳</Text>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 32,
    backgroundColor: '#00AEF0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.5,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Appbar;