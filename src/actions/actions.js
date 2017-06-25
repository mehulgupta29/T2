export const actionTypes = {
  SET_NEW_USER_DATA: "SET_NEW_USER_DATA",
  LOGOUT: "LOGOUT"
};

const actions = {
  setNewUserData(userData) {
    return {
      type: actionTypes.SET_NEW_USER_DATA,
      data: userData
    }
  },
  logout() {
    return {
      type: actionTypes.LOGOUT
    }
  }
};

export default actions;
