export const actionTypes = {
  SET_NEW_USER_DATA: "SET_NEW_USER_DATA",
  LOGOUT: "LOGOUT",
  PUT_USERS: "PUT_USERS",
  SET_NEW_BET: "SET_NEW_BET"
};

const actions = {
  setNewUserData(userData, firebase) {
    return {
      type: actionTypes.SET_NEW_USER_DATA,
      data: userData,
      firebase: firebase
    }
  },
  putUsers(users) {
    return {
      type: actionTypes.PUT_USERS,
      data: users
    }
  },
  logout() {
    return {
      type: actionTypes.LOGOUT
    }
  },
  setNewBet(betData, firebase) {
    return {
      type: actionTypes.SET_NEW_BET,
      data: betData,
      firebase: firebase
    }
  }
};

export default actions;
