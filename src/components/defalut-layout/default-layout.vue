<template>
  <div class="site-container" :class="getClasses()">
    <navbar class="navbar" :title="this.$route.name" :openedSidebar="openedSidebar" @sidebarState="sidebarState()"></navbar>
    <sidebar  @sidebarState="sidebarState()" class="sidebar"></sidebar>
    <addition-navbar></addition-navbar>
    <main class="main-content">
      <div class="main-content-wrap">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </main>
  </div>
</template>

<script>
import NavBar from '../addition-navbar/addition-navbar'
import navbar from '../navbar/navbar'
import sidebar from '../sidebar/sidebar'
import footer from '../footer/footer'
export default {
  name: 'default-layout',
  data: () => ({
    openedSidebar: false,
    rtl: false
  }),
  methods: {
    getClasses () {
      return {
        'open-sidebar': this.openedSidebar,
        'rtl': this.rtl
      }
    },
    sidebarState () {
      this.openedSidebar = !this.openedSidebar
      this.getClasses()
    }
  },
  components: {
    'addition-navbar': NavBar,
    'navbar': navbar,
    'sidebar': sidebar,
    'app-footer': footer
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/sass/variable';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  .site-container {
    height: 100%;
    min-height: 100vh;
  }
  .main-content {
    height: calc(100vh - 3.1428572rem);
    padding: 70px 0 0 $sidebar-width;
    transition: padding .2s $animation;
    @media #{$max991} {
      padding-left: 0;
    }
  }
  .main-content-wrap {
    display: table;
    height: 100%;
    padding: 22px;
    table-layout: fixed;
    width: 100%;
  }
  .navbar {
    transition:
      left .2s $animation,
      right .2s $animation;
    @media #{$max991} {
      width: 100%;
    }
  }
  .site-container.open-sidebar {
    .navbar {
      left: 220px;
    }
    .sidebar {
      left: 0;

      .sidebar-overlay {
        @media #{$max991} {
          opacity: 1;
          transition:
            .2s opacity 0s $animation,
            0s visibility 0s $animation;
          visibility: visible;
        }
      }
    }
  }
  .rtl {
    .navbar {
      left: 0;
      @media #{$max991} {
        left: auto;
      }
    }
    .main-content {
      padding-left: 0;
      padding-right: $sidebar-width;
      @media #{$max991} {
        padding-right: 0;
      }
    }
    &.open-sidebar {
      .navbar {
        right: 220px;
      }
      .sidebar {
        left: auto;
        right: 0;
      }
    }
  }
</style>
