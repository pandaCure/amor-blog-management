import { createStore } from "vuex";

export interface State {
  userInfo?: {
    id: number;
    username: string;
  };
}

const store = createStore<State>({
  state: {},
  mutations: {
    getUserInfo: (state, info) => {
      state.userInfo = info;
    },
  },
});

export default store;
