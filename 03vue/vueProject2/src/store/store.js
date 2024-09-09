import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "ohjeonghwan",
        password: "12345",
        username: "오정환",
        addr: "서울",
        image: "https://picsum.photos/100",
        latitude: "37.48322075935205",
        longitude: "126.91562063536725",
      },
      {
        userid: "gildong",
        password: "123151",
        username: "홍길동",
        addr: "청주",
        image: "https://picsum.photos/101",
        latitude: "37.47594146281152",
        longitude: "126.89933364425818",
      },
      {
        userid: "problem",
        password: "98371",
        username: "문씨",
        addr: "광주",
        image: "https://picsum.photos/102",
        latitude: "37.465454759280554",
        longitude: "126.90439426631131",
      },
    ],
    selectedUser: null,
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, payload) {
      state.userData = state.userData.filter((user) => user.userid !== payload);
    },
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
    editUserData(state, payload) {
      for (let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].userid === state.selectedUser.userid) {
          state.userData[i].userid = payload.userid;
          state.userData[i].password = payload.password;
          state.userData[i].username = payload.username;
          state.userData[i].addr = payload.addr;
          state.userData[i].image = payload.image;
          state.userData[i].latitude = payload.latitude;
          state.userData[i].longitude = payload.longitude;
          break;
        }
      }
    },
  },
});
