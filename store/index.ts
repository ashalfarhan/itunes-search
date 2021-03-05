import { Payload, State } from "~/types";

export const state = (): State => ({
  results: []
});
export const mutations = {
  loadResults(state: State, payload: Payload) {
    state.results = payload;
  },
  clearStore(state: State) {
    state.results = [];
  }
};
export const getters = {
  getResults(state: State) {
    return state.results;
  }
};
