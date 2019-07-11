<template>
    <div class="page404-host">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>Sorry, but the page you were trying to view does not exist. Report this error?</p>
    </div>
</template>

<script>
export default {
  name: 'page-404'
}
</script>

<style scoped lang="scss">
  @import '../../../assets/sass/variable';

  .page404-host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $warning-color;
    color: #fff;
    height: 100%;
    padding: $module;
    text-align: center;
    width: 100%;

    h1 {
      font-size: 8rem;
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
  }
</style>
