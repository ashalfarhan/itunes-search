<template>
  <div class="w-screen h-screen">
    <div class="w-11/12 mx-auto flex items-center justify-center h-full">
      <form
        class="w-full flex justify-center max-w-sm mx-auto items-stretch flex-col"
        @submit.prevent="handleSubmit"
      >
        <input
          type="text"
          placeholder="artist, albums, single, song"
          v-model="userInput"
          class="focus:outline-none py-2 border-b-2 text-2xl border-green-600 text-center"
        />
        <input
          class="py-4 px-2 cursor-pointer bg-green-500 text-white font-semibold rounded-xl mt-4"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import formatSearch from "~/helper/formatSearch";

interface Data {
  userInput: string;
}

export default Vue.extend({
  data(): Data {
    return {
      userInput: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push(`result/${formatSearch(this.userInput)}`);
    }
  }
});
</script>
