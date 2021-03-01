import axios from "axios";

export default async function({ params, store }) {
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${params.id}`
    );
    const {
      data: { results }
    } = response;
    store.commit("loadResults", results);
  } catch (err) {
    console.error("Error while get request to api" + err.message);
  }
}
