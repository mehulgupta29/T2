import {actionTypes} from '../actions/actions';
import * as _ from 'lodash';

function putUserIfNotExists(users, newUser) {
  const isUserPresent = _.find(users, {uid: newUser.uid});
  return isUserPresent ? users : _.concat(users, newUser);
}

export default function reducer(state, action){
  switch(action.type) {
    case actionTypes.SET_NEW_USER_DATA:

      // we are storing users list in firebase
      const database = action.firebase.database();

      let usersList = [];
      database.ref('/').once('value', snapshot => {
        usersList = _.has(snapshot.val(), 'users') ?
          putUserIfNotExists(snapshot.val().users, action.data) : putUserIfNotExists([], action.data);

        database.ref('/').set({users: usersList});
      });

      // storing currentUser in redux store
      return Object.assign({}, state, {currentUser: action.data});

    // case actionTypes.PUT_USERS:
    //   console.log("hi");
    //   // return Object.assign({}, state, {users: action.data});
    //       return state;

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {currentUser: null});

    default :
      return state;
  }
}
