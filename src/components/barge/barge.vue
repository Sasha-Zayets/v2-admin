<template>
  <div class="badge-host">
    <div class="badge" :class="getClasses()" :style="getStyles()">
      <div class="arrow" :class="getArrowClasses()" v-if="arrow"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barge',
  props: ['color', 'customColor', 'outline', 'borderRadius', 'arrow', 'size', 'position'],
  methods: {
    getClasses () {
      return {
        'success-badge': this.color === 'success',
        'info-badge': this.color === 'info',
        'warning-badge': this.color === 'warning',
        'danger-badge': this.color === 'danger',
        'custom-badge': this.customColor,
        'outline-badge': this.outline,
        'border-radius-badge': this.borderRadius,
        'arrow-right-badge': this.arrow === 'right',
        'arrow-left-badge': this.arrow === 'left',
        'large-badge': this.size === 'large',
        'medium-badge': this.size === 'medium',
        'top-left': this.position === 'top-left',
        'bottom-left': this.position === 'bottom-left',
        'bottom-right': this.position === 'bottom-right'
      }
    },
    getStyles () {
      return {
        'background-color': this.customColor,
        'border-color': this.customColor,
        'color': this.customColor
      }
    },
    getArrowClasses () {
      return {
        'arrow-top': this.arrow === 'top',
        'arrow-right': this.arrow === 'right',
        'arrow-bottom': this.arrow === 'bottom',
        'arrow-left': this.arrow === 'left'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/sass/variable';

  .badge-host {
    display: inline-block;

    .badge {
      background: main-color(A100);
      border: 1px solid main-color(A100);
      color: #fff;
      font-size: .75rem;
      font-family: $main-ff;
      line-height: $main-lh;
      min-width: 20px;
      padding: 1px 6px;
      position: relative;
      text-align: center;

      .arrow {
        border: 6px solid transparent;
        height: 0;
        position: absolute;
        width: 0;

        &.arrow-top {
          border-bottom-color: inherit;
          bottom: 100%;
          left: 50%;
          margin-left: -6px;
        }
        &.arrow-right {
          border-left-color: inherit;
          left: 100%;
          margin-top: -6px;
          top: 50%;
        }
        &.arrow-bottom {
          border-top-color: inherit;
          left: 50%;
          margin-left: -6px;
          top: 100%;
        }
        &.arrow-left {
          border-right-color: inherit;
          margin-top: -6px;
          right: 100%;
          top: 50%;
        }
      }
      &.border-radius-badge {
        border-radius: 10px;

        .arrow {
          &.arrow-right {
            margin-left: -2px;
          }
          &.arrow-left {
            margin-right: -2px;
          }
        }
      }
      &.success-badge {
        background: $success-color;
        border-color: $success-color;
      }
      &.info-badge {
        background: $info-color;
        border-color: $info-color;
      }
      &.warning-badge {
        background: $warning-color;
        border-color: $warning-color;
      }
      &.danger-badge {
        background: $danger-color;
        border-color: $danger-color;
      }
      &.outline-badge {
        background: none !important;
        color: inherit;

        &.success-badge {
          color: $success-color;
        }
        &.info-badge {
          color: $info-color;
        }
        &.warning-badge {
          color: $warning-color;
        }
        &.danger-badge {
          color: $danger-color;
        }
      }
      &.custom-badge {
        &:not(.outline-badge) {
          color: #fff !important;
        }
      }
      &.arrow-right-badge {
        margin-right: 6px;
      }
      &.arrow-left-badge {
        margin-left: 6px;
      }
      &.large-badge {
        padding: 6px 20px;

        &.border-radius-badge {
          border-radius: 15px;
        }
      }
      &.medium-badge {
        padding: 3px 12px;

        &.border-radius-badge {
          border-radius: 12px;
        }
      }
    }
    mat-icon & {
      .badge {
        bottom: 100%;
        left: 100%;
        margin: 0 0 -10px -10px;
        position: absolute;
        z-index: 1;

        &.top-left {
          left: auto;
          margin: 0 -10px -10px 0;
          right: 100%;
        }
        &.bottom-left {
          bottom: auto;
          left: auto;
          margin: -10px -10px 0 0;
          right: 100%;
          top: 100%;
        }
        &.bottom-right {
          bottom: auto;
          margin: -10px 0 0 -10px;
          top: 100%;
        }
      }
    }
    & .top-left {
      position: absolute;
      left: -12px;
      top: -12px;
    }
    & .bottom-left {
      position: absolute;
      left: -12px;
      bottom: -12px;
    }
    & .bottom-right {
      position: absolute;
      right: -12px;
      bottom: -12px;
    }
    & .top-right {
      position: absolute;
      top: -12px;
      right: -12px;
    }
  }

</style>
