import * as selectionActionTypes from '../constants/SelectionActionTypes';

export function selectWordGroup(groupName) {
  return function(dispatch) {
    dispatch({
      type: selectionActionTypes.SELECT_GROUP,
      groupName: groupName
    });
  }
}

