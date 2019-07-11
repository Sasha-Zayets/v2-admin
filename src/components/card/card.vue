<template>
    <div
         class="card-host"
         :class="{'fullHeight': full === 'yes'}"
    >
      <div
        class="card-wrap"
        :class="{
          'success-card': bgColor === 'success',
          'info-card': bgColor === 'info',
          'warning-card': bgColor === 'warning',
          'danger-card': bgColor === 'danger',
          'success-color-card': color === 'success',
          'info-color-card': color === 'info',
          'warning-color-card': color === 'warning',
          'danger-color-card': color === 'danger',
          'bg-image-card': bgImage,
          'outline-card': outline
        }"
        :style="{
         'background-color': this.customBgColor,
         'background-image': 'url(' + bgImage + ')',
         'border-color': customBgColor,
         'color': color
        }"
      >
        <div
          class="card-header"
          v-if="title"
          :class="{
            'text-right': align === 'right',
            'text-center': align === 'center'
          }"
        >
          {{title}}
        </div>

        <div
          class="card-content"
          :class="{
            'text-right': align === 'right',
            'text-center': align === 'center'
        }"
          :style="{'padding': indents}"
        >
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: ['title', 'bgColor', 'customBgColor', 'bgImage', 'outline', 'indents', 'align', 'color', 'full']
}
</script>

<style scoped lang="scss">
  @import '../../assets/sass/variable';

  .card-host {
    display: block;
    margin: 0 0 $module;

    .card-wrap {
      background-color: #fff;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border: 1px solid #fff;
      box-shadow: 1px 1px 5px 0px rgba(#000,.25);
      position: relative;

      &:not(.outline-card) {
        border: 0 !important;
      }
      .card-header {
        background: main-color(500);
        border-radius: 0;
        color: #fff;
        display: block;
        margin: -1px -1px 0 -1px;
        padding: $module/2 $module;
        position: relative;
      }
      .card-content {
        padding: $module;
        position: relative;
        width: 100%;
      }
      &.success-card {
        background: $success-color;
        border-color: $success-color;

        &:not(.outline-card) {
          color: #fff;
        }
      }
      &.info-card {
        background: $info-color;
        border-color: $info-color;

        &:not(.outline-card) {
          color: #fff;
        }
      }
      &.warning-card {
        background: $warning-color;
        border-color: $warning-color;

        &:not(.outline-card) {
          color: #fff;
        }
      }
      &.danger-card {
        background: $danger-color;
        border-color: $danger-color;

        &:not(.outline-card) {
          color: #fff;
        }
      }
      &.success-color-card {
        color: $success-color;
      }
      &.info-color-card {
        color: $info-color;
      }
      &.warning-color-card {
        color: $warning-color;
      }
      &.danger-color-card {
        color: $danger-color;
      }
      &.outline-card {
        background: none !important;
        box-shadow: none !important;
      }
      &.bg-image-card {
        border: none !important;

        &:before {
          background-color: inherit;
          content: '';
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }
  }
  //fullHeight card
  .fullHeight {
    &.card-host {
      height: 100%;
      .card-wrap {
        height: 100%;
      }
      .card-header {
        height: 100%;
      }
      .card-content {
        height: 100%;
      }
    }
  }
</style>
