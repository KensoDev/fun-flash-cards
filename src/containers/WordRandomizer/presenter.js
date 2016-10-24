import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native'

import StageSelector from '../StageSelector';
import Header from '../../components/Header';

class WordRandomizer extends Component {
  constructor(props) {
    super(props);
    this.randomWord = this.randomWord.bind(this);
    this.resetWord = this.resetWord.bind(this);

    this.words = props.words[props.data];

    this.state = {
      currentWord: "Get Ready..."
    }
  }

  componentDidMount() {
    setTimeout(() => { this.randomWord() }, 5000);
  }

  randomWord() {
    let word = this.words[Math.floor(Math.random()*this.words.length)];

    this.setState({
      currentWord: word
    });

    setTimeout(() => { this.resetWord() }, 1000);
  }

  resetWord() {
    this.setState({
      currentWord: ""
    });
  }

  render() {
    const { data, words, device } = this.props;

    return (
      <View style={ styles.container }>

        <View style={ styles.message }>
          <Text style={ styles.messageText }>
            Press anywhere on the screen for the next word
          </Text>
        </View>

        <TouchableHighlight
          underlayColor="#8445B3"
          onPress={ () => this.randomWord() }
          style={ styles.wordContainer }>

          <Text style={ styles.word }>
            { this.state.currentWord }
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    margin: 10,
    padding: 10,
    backgroundColor: '#5FA14A',
  },
  messageText: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#8445B3',
  },
  wordContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8445B3',
  },
  word: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 60
  }
});

module.exports = WordRandomizer;
