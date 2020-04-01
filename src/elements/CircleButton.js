import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const glyphMap = {
  check: '\uf00c',
  pencil: '\uf303',
  plus: '\uf067', 
};
const CustomIcon = createIconSet(glyphMap, 'FontAwesome', fontAwsome);

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwsome
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    const { style, color, onPress } = this.props;

    let bgColor = '#0295F5';
    let textColor = '#fff';

    if (color === '#0295F5') {
      bgColor = '#fff';
      textColor = '#0295F5';
    }

    return(
      <TouchableHighlight 
        style={[styles.container, style]}
        onPress={onPress}
        underlayColor='rgba(255, 255, 255, 0)'
      >
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon 
                name={this.props.name}
                style={[styles.circleButtonIcon, { color: textColor }]} 
              />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 32,
    right: 32,
    zIndex: 10,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.5,
  },
  circleButtonIcon: {
    fontSize: 24,
    lineHeight: 24,
    // fontFamily: 'FontAwesome',
  },
});

export default CircleButton;