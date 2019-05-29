export const LoginStore = {
  setData(USER_ID, data) {
    return localStorage.setItem(USER_ID, data);
  },
  removeData(USER_ID,) {
    localStorage.removeItem(USER_ID);
  },
  getData(USER_ID,) {
    return localStorage.getItem(USER_ID);
  }
}
