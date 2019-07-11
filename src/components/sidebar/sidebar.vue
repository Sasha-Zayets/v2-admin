<template>
  <div class="sidebar-host">
    <div class="site-sidebar">
      <logo></logo>
      <main-menu></main-menu>
    </div>
    <div class="sidebar-overlay"></div>
  </div>
</template>

<script>
import mainMenu from '../main-menu/main-menu'
import logo from '../logo/logo'
export default {
  name: 'sidebar',
  components: {
    'main-menu': mainMenu,
    logo
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/sass/variable';

.sidebar-host {
  background: main-color(500);
  display: block;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition:
  left .2s $animation,
  right .2s $animation;
  width: $sidebar-width;
  will-change: left, right;
  z-index: 997;
  @media #{$max991} {
    left: -($sidebar-width);
  //z-index: 9997;
  }

  .rtl & {
    left: auto;
    right: 0;
    @media #{$max991} {
      left: auto;
      right: -($sidebar-width);
    }
  }
  .site-sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    @media #{$max991} {
      position: relative;
      z-index: 9999;
    }
  }
  .sidebar-overlay {
    background: rgba(main-color(500),.2);
    height: 100%;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transition:
    .2s opacity 0s $animation,
    0s visibility .2s $animation;
    visibility: hidden;
    width: 100%;
    z-index: 9998;
  }
}
</style>
