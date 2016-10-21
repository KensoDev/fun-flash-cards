import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  View,
  Text
} from 'react-native'

import StageSelector from '../StageSelector';
import Header from '../../components/Header';
import WordRandomizer from '../WordRandomizer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { device } = this.props;
    const initialRoute = {
      index: 0,
      name: 'stageSelector',
      data: {}
    }

    return (
      <Navigator
        initialRoute={ initialRoute }
        renderScene={( route, navigator ) => {
        if (route.index === 0) {
          return(
            <View style={ styles.container }>
              <Header
                route={ route }
                navigator={ navigator } />
              <StageSelector navigator={ navigator } />
            </View>
          );
        }
        if (route.index === 1) {
          return(
            <View style={ styles.container }>
              <Header
                route={ route }
                navigator={ navigator } />
              <WordRandomizer
                data={ route.data }
                navigator={ navigator } />
            </View>);
        }
      }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
});

module.exports = App;
