<template>
  <li
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    class="list-none space-x-2 bg-inherit relative card rounded-xl p-4 flex items-center transform transition ease-in-out duration-75 origin-bottom cursor-pointer hover:shadow-2xl hover:scale-110 md:hover:scale-125"
  >
    <img :src="result.artworkUrl100" />
    <div class="font-poppins">
      <h1 class="font-medium tracking-wider">
        {{ shortText(result.artistName) }}
      </h1>
      <h1>
        {{ shortText(result.trackName) }}
      </h1>
      <p class="text-sm">
        Price: {{ result.collectionPrice }} {{ result.currency }}
      </p>
    </div>
    <audio controls ref="audio" class="hidden" preload="none">
      <source :src="result.previewUrl" />
      Your browser doesn't support the audio element
    </audio>
  </li>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    result: Object
  },
  methods: {
    handleEnter(e: any) {
      e.target.lastChild.play();
    },
    handleLeave(e: any) {
      e.target.lastChild.pause();
    },
    shortText(arg: string) {
      if (arg) {
        return arg.split(" ").length > 4
          ? arg
              .split(" ")
              .slice(0, 4)
              .join(" ")
              .concat("...")
          : arg;
      } else {
        return "";
      }
    }
  }
});
</script>
<style scoped>
.card::after:hover {
  content: "";
  border-radius: 10px;
  background: inherit;
  position: absolute;
  left: -10px;
  right: 0;
  top: 0px;
  bottom: 0;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05);
  filter: blur(1px);
}
</style>
