<template>
  <div class="logo-host">
    <a href="#" class="logo">
      <img src="../../assets/img/logo.png" alt="" width="67" height="50" class="logo-img">
      <span class="logo-text">admin</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style scoped lang="scss">
@import '../../assets/sass/variable';

.logo-host {
  background: main-color(700);
  display: block;
  width: 100%;

  .logo {
    align-items: flex-end;
    display: flex;
    font-family: $second-ff;
    height: 100%;
    padding: 10px 22px;
    text-decoration: none;

    .logo-img {
      height: 50px;
      max-height: 100%;
      max-width: 100%;
      vertical-align: top;
      width: 67px;
    }
    .logo-text {
      color: #fff;
      display: block;
      font-size: 24px;
      padding: 0 11px 7px;
    }
  }
}
</style>
