import { Payload, State } from "~/types";

export const state = (): State => ({
  results: []
});
export const mutations = {
  loadResults(state: State, payload: Payload) {
    state.results = payload;
  }
};
