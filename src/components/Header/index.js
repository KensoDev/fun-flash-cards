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

    let backButton = null;

    if (this.props.route.index > 0) {
        backButton = <View style={ styles.backButtonContainer }>
          <Icon.Button
            onPress={ () => this.back() }
            style={ styles.backButton }
            name="angle-left">
            Back
          </Icon.Button>
        </View>
    }

    return(
      <View style={ styles.header }>
        { backButton }
        <Text style={ styles.messageBoxTitleText }>Fun Flash Cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButtonContainer: {

  },
  backButton: {
    backgroundColor: '#E95155',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#E95155',
  },
  messageBoxTitleText: {
    flex: 1,
    textAlign: 'center',
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
  }
});

module.exports = Header;
