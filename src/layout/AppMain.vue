<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 800px;
    background-color: #f3f3f3;
  }
</style>
