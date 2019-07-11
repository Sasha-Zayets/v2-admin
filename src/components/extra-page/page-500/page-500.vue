<template>
    <div class="page-host">
      <h1>Server Error</h1>
      <h2>Sorry, server goes wrong</h2>
      <p>We track these errors automatically, but if the problem persists feel free to <a href="#">contact us</a>.</p>
    </div>
</template>

<script>
export default {
  name: 'page-500'
}
</script>

<style scoped lang="scss">
  @import '../../../assets/sass/variable';

  .page-host {
    height: 100%;
    background: $warning-color;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: $module;
    text-align: center;
    width: 100%;

    h1 {
      font-size: 3.5rem;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 9.5rem;
      position: relative;
      @media #{$max767} {
        margin-bottom: 6rem;
      }

      &:before {
        content: "\f29c";
        display: flex;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 26rem;
        justify-content: center;
        left: 0;
        line-height: 1;
        margin-top: -13rem;
        opacity: .2;
        position: absolute;
        right: 0;
        text-rendering: auto;
        top: 50%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        @media #{$max767} {
          font-size: 20rem;
          margin-top: -10rem;
        }
      }
    }
    h2 {
      font-size: 2rem;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: .5rem;
    }
    p {
      color: rgba(#fff,.5);
      margin: 0;
    }
    a {
      color: rgba(#fff,.7);

      &:hover {
        color: #fff;
      }
    }
  }
</style>
