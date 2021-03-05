import { Context } from "@nuxt/types";
import axios from "axios";
import { API_URL } from "~/helper/constants";

export default async function({ params, store }: Context) {
  try {
    const response = await axios.get(`${API_URL}${params.id}`);
    const {
      data: { results }
    } = response;
    store.commit("loadResults", results);
  } catch (err) {
    console.error("Error! \n Cannot fetch the data: " + err.message);
  }
}
