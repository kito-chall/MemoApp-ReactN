import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#0295F5';
    let textColor = '#fff';

    if (color === '#0295F5') {
      bgColor = '#fff';
      textColor = '#0295F5';
    }

    return(
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonText, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    // backgroundColor: '#0295F5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.5,
    zIndex: 10,
  },
  circleButtonText: {
    fontSize: 24,
    lineHeight: 24,
    // color: '#fff',
  },
});

export default CircleButton;