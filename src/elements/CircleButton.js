import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  check: '\uf00c',
  pencil: '\uf303',
  plus: '\uf067',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }


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
        {
          this.state.fontLoaded ? (
            <CustomIcon 
              name={this.props.name}
              style={[styles.circleButtonIcon, { color: textColor }]} 
            />
          ) : null
        }
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
  circleButtonIcon: {
    fontSize: 24,
    lineHeight: 24,
    // color: '#fff',
    fontFamily: 'FontAwesome',
  },
});

export default CircleButton;