import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {
  constructor(props) {
    super(props);
    this.navigator = props.navigator;
  }

  back() {
    this.navigator.pop();
  }

  render() {
    return(
      <View style={ styles.header }>
        <TouchableHighlight
          style={ styles.backButton }
          onPress={ () => this.back() }>
          <Icon name="angle-left" size={ 30 } />
        </TouchableHighlight>
        <Text style={ styles.messageBoxTitleText }>Fun Flash Cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 10,
    top: 20
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: '#E95155',
  },
  messageBoxTitleText: {
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    fontSize:20,
  }
});

module.exports = Header;
