<template>
  <div class="container">
    <div class=" w-11/12 mx-auto">
      <form
        class="flex justify-center items-center flex-col"
        @submit.prevent="handleSubmit"
      >
        <input
          type="text"
          placeholder="Beatles, twentyonepilots"
          v-model="userInput"
          class="focus:outline-none focus:border-b-4 border-red-500"
        />
        <input type="submit" value="Search" />
      </form>
      <div v-if="results.length > 0 && userInput">
        <ul>
          <li v-for="(result, idx) in results" :key="idx">
            <h1>{{ result.artistName }}</h1>
            <img :src="result.artworkUrl100" />
            <audio controls>
              <source :src="result.previewUrl" />
              Your browser doesn't support the audio element
            </audio>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { API_URL } from "~/helper/constants";
import formatSearch from "~/helper/formatSearch";
interface Data {
  userInput: string;
  results: string | string[];
}

export default Vue.extend({
  data(): Data {
    return {
      userInput: "",
      results: []
    };
  },
  methods: {
    async handleSubmit(): Promise<void> {
      const response = await fetch(`${API_URL}${formatSearch(this.userInput)}`);
      const data = await response.json();
      console.log(data.results);
      this.results = data.results;
    }
  }
});
</script>
