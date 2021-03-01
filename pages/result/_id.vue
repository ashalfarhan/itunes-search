<template>
  <div class="w-11/12 mx-auto mt-4">
    <nuxt-link to="/" class="font-poppins uppercase hover:underline"
      >Go back home</nuxt-link
    >
    <h1 class="text-2xl font-poppins">
      Here's the results of {{ searchResult }}
    </h1>
    <div
      v-if="results.length"
      class="grid grid-cols-3 md:grid-cols-4 gap-8 mt-12"
    >
      <app-card
        v-for="(result, idx) in results"
        :key="idx"
        :result="result"
      ></app-card>
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
      return this.$store.state.results;
    },
    searchResult() {
      return this.$route.params.id.split("+").join(" ");
    }
  }
});
</script>
