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
      },
      {
        userid: "gildong",
        password: "123151",
        username: "홍길동",
        addr: "청주",
        image: "https://picsum.photos/100",
      },
      {
        userid: "problem",
        password: "98371",
        username: "문씨",
        addr: "광주",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
  },
});
