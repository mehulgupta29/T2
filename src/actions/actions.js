export const actionTypes = {
  SET_NEW_USER_DATA: "SET_NEW_USER_DATA",
  LOGOUT: "LOGOUT",
  PUT_USERS: "PUT_USERS"
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
  }
};

export default actions;
