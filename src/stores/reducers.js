import {actionTypes} from '../actions/actions';
import * as _ from 'lodash';

function putUserIfNotExists(users, newUser) {
  const isUserPresent = _.find(users, {uid: newUser.uid});
  return isUserPresent ? users : _.concat(users, newUser);
}


export default function reducer(state, action){
  switch(action.type) {
    case actionTypes.SET_NEW_USER_DATA:
      return Object.assign({}, state, {currentUser: action.data, users: putUserIfNotExists(state.users, action.data)});

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {currentUser: null});

    default :
      return state;
  }
}

