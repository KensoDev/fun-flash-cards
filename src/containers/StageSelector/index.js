import React from 'react';
import { connect } from 'react-redux';
import StageSelector from './presenter';
import { selectWordGroup } from '../../actions/SelectWordGroup';

function mapStateToProps(state) {
  const { groups } = state.groups

  return {
    groups
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectWordGroup: (wordGroup) => {
      dispatch(selectWordGroup(wordGroup))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StageSelector);
