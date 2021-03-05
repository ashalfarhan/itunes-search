<template>
  <div class="w-11/12 mx-auto mt-4">
    <nuxt-link
      to="/"
      @click="handleHome"
      class="font-poppins text-white uppercase hover:underline"
      >Go back home</nuxt-link
    >
    <div v-if="results.length || resultsMatch">
      <h1 class="text-2xl text-white font-poppins">
        Here's the results of {{ searchResult }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        <app-card
          v-for="(result, idx) in results"
          :key="idx"
          :result="result"
        />
      </div>
    </div>
    <div v-else>
      <h1 class="text-2xl text-white font-poppins">
        Oops! Cannot find the result
      </h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppCard from "~/components/AppCard.vue";

export default Vue.extend({
  components: {
    AppCard
  },
  middleware: "search",
  computed: {
    results() {
      return this.$store.getters.getResults;
    },
    searchResult() {
      return this.$route.params.id.split("+").join(" ");
    },
    resultsMatch() {
      return this.$store.getters.getResults.some(
        (item: any) =>
          item.artistName.toLowerCase() === this.searchResult.toLowerCase() ||
          item.trackName.toLowerCase() === this.searchResult.toLowerCase()
      );
    }
  },
  methods: {
    handleHome() {
      this.$store.commit("clearStore");
    }
  }
});
</script>
