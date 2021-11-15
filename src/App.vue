<template>
  <div class="app">
    
    <router-view />
    
  </div>
</template>

<script>


export default {
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto:wght@400;500&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
html {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
title {
  font-family: "Montserrat", sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

@media (min-width: 320px) {
  .container {
    padding: 52px 16px;
  }
}
</style>