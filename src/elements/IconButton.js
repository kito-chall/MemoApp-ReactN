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

class iconButton extends React.Component {
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

    return(
      <TouchableHighlight
        style={[styles.container, style]}
        onPress={onPress}
        underlayColor='rgba(255, 255, 255, 0)'
        >
        <View style={styles.iconButton}>
          {
            this.state.fontLoaded ? (
              <CustomIcon 
                name={this.props.name}
                style={styles.icon, { color: color }} 
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
    width: 50,
    height: 50,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    lineHeight: 24,
  },
});

export default iconButton;