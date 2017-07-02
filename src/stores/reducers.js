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
        database.ref('/').set(Object.assign({}, snapshot.val(), {users: usersList}));
      });

      // storing currentUser in redux store
      return Object.assign({}, state, {currentUser: action.data});

    // case actionTypes.PUT_USERS:
    //   console.log("hi");
    //   // return Object.assign({}, state, {users: action.data});
    //       return state;

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {currentUser: null});


    case actionTypes.SET_NEW_BET:
      // we are storing users list in firebase
      const databaseSetNewBet = action.firebase.database();
      let betsList = [action.data];
      databaseSetNewBet.ref('/').once('value', snapshot => {
        betsList = _.has(snapshot.val(), 'bets') ? snapshot.val().bets.concat(action.data) : [action.data];
        databaseSetNewBet.ref('/').set(Object.assign({}, snapshot.val(), {bets: betsList}));
      });

      // adding new bet to the redux store
      return Object.assign({}, state, {bets: betsList});

    default :
      return state;
  }
}
