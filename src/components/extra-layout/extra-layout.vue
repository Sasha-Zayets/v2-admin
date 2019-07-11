<template>
  <div class="block-wrap">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'extra-leyout'
}
</script>

<style scoped>
.block-wrap {
  height: 100vh;
  display: table;
}
</style>
