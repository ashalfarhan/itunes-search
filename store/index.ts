import { State } from "~/types";

export const state = (): State => ({
  results: []
});
export const mutations = {
  loadResults(state: State, payload: string[]) {
    state.results = payload;
  }
};
