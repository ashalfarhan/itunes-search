<template>
  <div class="main h-screen overflow-x-hidden w-screen">
    <app-header />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.main {
  background-image: url("/bg0.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  background-size: cover;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
