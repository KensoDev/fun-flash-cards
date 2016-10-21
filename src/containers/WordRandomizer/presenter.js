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
  container: {
    flex: 1,
    alignItems: 'stretch'
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
