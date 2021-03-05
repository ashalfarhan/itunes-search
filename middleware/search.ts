import { Context } from "@nuxt/types";
import axios from "axios";

export default async function({ params, store }: Context) {
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${params.id}`
    );
    const {
      data: { results }
    } = response;
    store.commit("loadResults", results);
  } catch (err) {
    console.error("Error! \n Cannot fetch the data: " + err.message);
  }
}
