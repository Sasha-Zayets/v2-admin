<template>
    <div class="alert-host">
      <div
        v-if="non"
        class="alert"
        :class="{
    'success-alert': this.color === 'success',
    'info-alert': this.color === 'info',
    'warning-alert': this.color === 'warning',
    'danger-alert': this.color === 'danger',
    'outline-alert': this.outline,
    'with-close': this.close
  }"
        :style="{
   'background': this.customColor,
   'border-color': this.customColor
  }"
      >
        <slot></slot>
        <a href="#" class="close" v-if="close" @click.prevent="closeWind"><v-icon color="white">clear</v-icon></a>
      </div>
    </div>
</template>

<script>
export default {
  props: ['color', 'customColor', 'outline', 'close'],
  name: 'alert-panel',
  data: () => ({
    non: true
  }),
  methods: {
    closeWind (alert) {
      this.non = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/sass/variable';
  .alert-host {
    display: block;
    margin-bottom: $module;

    &:last-child {
      margin-bottom: 0;
    }
    .alert {
      background: main-color(A100);
      border: 1px solid main-color(A100);
      padding: $module/1.5 $module;
      position: relative;

      &:not(.outline-alert){
        color: #fff;

          & a {
          color: rgba(#fff,.8);

          &:hover {
            color: #fff;
          }
        }
      }
      .close {
        background: rgba(#000,.1);
        font-size: 20px;
        line-height: 1;
        position: absolute;
        right: 0;
        top: 0;
        transition:
          background .2s $animation,
          color .2s $animation;

        .rtl & {
          left: 0;
          right: auto;
        }
        &:hover {
          background: rgba(#fff,.3);
          color: #f00;
        }
        & .material-icons {
          color: white;
          font-size: inherit;
          margin: 0;
          vertical-align: top;
        }
      }
      .material-icons {
        color: main-color(A100);
        margin: 0 $module - 0.1 0 0;
        vertical-align: top;

        .rtl & {
          margin: 0 0 0 $module;
        }
      }
      &.success-alert {
        background: $success-color;
        border-color: $success-color;

         .material-icons {
          color: $success-color;
        }
      }
      &.info-alert {
        background: $info-color;
        border-color: $info-color;

        .material-icons {
          color: $info-color;
        }
      }
      &.warning-alert {
        background: $warning-color;
        border-color: $warning-color;

         .material-icons {
          color: $warning-color;
        }
      }
      &.danger-alert {
        background: $danger-color;
        border-color: $danger-color;

        .material-icons {
          color: $danger-color;
        }
      }
      &.outline-alert {
        background: none !important;
      }
    }
  }

</style>
