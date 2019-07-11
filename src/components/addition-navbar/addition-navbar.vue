<template>
  <div class="addition-host" :class="{'open': open}">
    <button class="open-navbar"  @click="openNavbar()">
      <i class="icon far fa-object-ungroup"></i>
    </button>

    <div class="navbar-wrap">
      <div class="navbar-header">
        {{ title }}
      </div><div class="navbar-content">
      <div>
        <h5 class="mt-0">Frameworks</h5>
        <p class="mb-1"><strong>Angular</strong></p>
        <v-progress-linear mode="determinate" color="blue" :value="'95'"></v-progress-linear>

        <p class="mb-1"><strong>React</strong></p>
        <v-progress-linear mode="determinate" color="blue" :value="'85'"></v-progress-linear>

        <p class="mb-1"><strong>Vue.js</strong></p>
        <v-progress-linear mode="determinate" color="blue" :value="'40'"></v-progress-linear>

        <p class="mb-1"><strong>Backbone.js</strong></p>
        <v-progress-linear mode="determinate" color="blue" :value="'38'"></v-progress-linear>
      </div>

      <hr>

      <div>
        <h5>Uploaded files</h5>

        <div class="files-wrap">
          <file :type="'jpg'" :size="'small'" :title="'bulb'" :image="'/content/file-1.jpg'"></file>
          <file :type="'doc'" :size="'small'" :title="'resume'"></file>
          <file :type="'jpg'" :size="'small'" :title="'watch'" :image="'/content/file-3.jpg'"></file>
          <file :type="'jpg'" :size="'small'" :title="'camera'" :image="'/content/file-4.jpg'"></file>
          <file :type="'pdf'" :size="'small'" :title="'documentation'"></file>
          <file :type="'mp4'" :size="'small'" :title="'video-tutorial'"></file>
          <file :type="'jpg'" :size="'small'" :title="'smart'" :image="'/content/file-5.jpg'"></file>
          <file :type="'zip'" :size="'small'" :title="'theme'"></file>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import file from '../file/file'
export default {
  name: 'addition-navbar',
  data: () => ({
    title: 'Addition navbar',
    open: false
  }),
  methods: {
    openNavbar () {
      this.open = !this.open
    }
  },
  components: {
    file
  }
}
</script>

<style lang="scss">
@import '../../assets/sass/variable';

.addition-host {
  background: #fff;
  bottom: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(300px, 0);
  transition:
    .2s transform 0s $animation,
    0s z-index .2s $animation;
  width: 300px;
  z-index: 997;
  @media #{$max543} {
    transform: translate(270px, 0);
    width: 270px;
  }

  .rtl & {
    left: 0;
    right: auto;
    transform: translate(-300px, 0);
    @media #{$max543} {
      transform: translate(-270px, 0);
    }
  }
  &.open {
    transform: translate(0, 0);
    transition:
      .2s transform 0s $animation,
      .2s z-index 0s $animation;
    z-index: 997;
  }
  .open-navbar {
    align-items: center;
    background: #fff;
    border: 1px solid #dfe4ed;
    color: main-color(500);
    cursor: pointer;
    display: flex;
    font-size: 20px;
    height: 50px;
    justify-content: center;
    margin-right: -1px;
    position: absolute;
    right: 100%;
    top: 92px;
    transition: color .2s $animation;
    width: 50px;
    outline: none;
    &:active {
      outline: none;
    }

    .rtl & {
      left: 100%;
      margin: 0 0 0 -1px;
      right: auto;
    }
    &:hover {
      color: main-color(A100);
    }
  }
  .navbar-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .navbar-header {
      align-items: center;
      background: main-color(700);
      color: #fff;
      display: flex;
      height: 70px;
      padding: 10px 22px;
    }
    .navbar-content {
      border-left: 1px solid #dfe4ed;
      flex-grow: 1;
      overflow: auto;
      padding: 22px 22px 22px 21px;
      width: 100%;

      .rtl & {
        border-left: 0;
        border-right: 1px solid #dfe4ed;
      }
      .files-wrap {
        margin: 0 -4px -10px;
      }
    }
  }
}
</style>
