import React from 'react';
import { connect } from 'react-redux';
import WordRandomizer from './presenter';

function mapStateToProps(state) {
  const { words } = state.words;

  return {
    words
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordRandomizer);
