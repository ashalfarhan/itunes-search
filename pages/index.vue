<template>
  <div class="bg-inherit h-full">
    <div
      class="bg-inherit w-11/12 mx-auto flex items-center justify-center h-full"
    >
      <form
        class="bg-inherit form pt-4 relative shadow-2xl rounded-xl w-full flex justify-center max-w-sm mx-auto items-stretch flex-col"
        @submit.prevent="handleSubmit"
      >
        <img src="/logo.svg" class="w-64 mx-auto" />
        <input
          type="text"
          placeholder="artist, albums, single, song"
          v-model="userInput"
          class="focus:outline-none py-2 border-b-2 text-2xl bg-transparent border-white text-center"
        />
        <input
          class="py-4 font-poppins uppercase px-2 cursor-pointer bg-transparent font-semibold rounded-xl mt-4"
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

<style scoped>
input::placeholder {
  color: black;
}
.form::before {
  content: "";
  z-index: -1;
  border-radius: 10px;
  background: inherit;
  position: absolute;
  left: 0px;
  right: 0;
  top: 0px;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.45);
  filter: blur(1px);
}
</style>
