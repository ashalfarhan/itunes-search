<template>
  <li
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    class="list-none space-x-2 rounded-xl p-4 flex items-center transform bg-gradient-to-r transition ease-in-out duration-75 origin-bottom cursor-pointer hover:shadow-2xl hover:scale-125"
  >
    <img :src="result.artworkUrl100" />
    <div class="font-poppins">
      <h1 class="font-medium tracking-wider">{{ result.artistName }}</h1>
      <h1>
        {{
          result.trackName
            ? String(result.trackName)
                .split(" ")
                .slice(0, 4)
                .join(" ")
            : ""
        }}
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
    }
  }
});
</script>
