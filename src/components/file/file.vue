<template>
    <div class="file-host">
      <div
        class="file"
        :class="{
          'doc-file': type === 'doc',
          'xlx-file': type === 'xlx',
          'pdf-file': type === 'pdf',
          'archive-file': type === 'zip',
          'audio-file': type === 'mp3',
          'video-file': (type === 'mp4') || (type === 'webm') || (type === 'ogv'),
          'image-file': (type === 'jpg') || (type === 'jpeg') || (type === 'png') || (type === 'gif'),
          'size-small': size === 'small',
          'size-large': size === 'large',
          'spinner-file': spinner
        }"
      >
        <div class="file-prev">
          <div class="icon" :style="{'background-image': 'url('+this.image+')'}">
            <i
              class="fa"
              :class="{
                'fa-paperclip': this.type === '*',
                'fa-file-word': this.type === 'doc',
                'fa-file-excel': this.type === 'xlx',
                'fa-file-pdf': this.type === 'pdf',
                'fa-file-archive': this.type === 'zip',
                'fa-file-audio': this.type === 'mp3',
                'fa-file-video': (this.type === 'mp4') || (this.type === 'webm') || (this.type === 'ogv'),
                'fa-file-image': (this.type === 'jpg') || (this.type === 'jpeg') || (this.type === 'png') || (this.type === 'gif')
            }"
              v-if="!this.image"
              aria-hidden="true"
            ></i>
            <i class="material-icons delete" v-if="this.delet">clear</i>
          </div>
          <div class="spinner" v-if="this.spinner"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>
        </div>
        <div class="file-name"><span class="name">{{this.title}}</span><span class="type">.{{this.type}}</span></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'file',
  props: ['title', 'type', 'image', 'size'],
  data: () => ({
    delet: false,
    spinner: false,
    link: false
  })
}
</script>

<style scoped lang="scss">
@import '../../assets/sass/variable';

.file-host {
  display: inline-block;
  margin: 0 4px 10px;
  position: relative;

  .file {
    display: block;
    width: 120px;

    .file-prev {
      background: rgba(main-color(A100),.3);
      color: #fff;
      display: block;
      font-size: 40px;
      padding-top: 100%;
      position: relative;
      width: 100%;

      .icon {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

        .delete {
          background: rgba(#000,.1);
          font-size: 20px;
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
        }
      }
      .spinner {
        background: inherit;
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

        .fa {
          font-size: inherit;
        }
      }
    }
    .file-name {
      display: flex;
      flex-wrap: nowrap;
      font-size: 11px;
      justify-content: flex-end;
      margin-top: 3px;
      white-space: nowrap;

      .rtl & {
        justify-content: flex-start;
      }
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &.doc-file {
      .file-prev {
        background: #029acf;
      }
    }
    &.xlx-file {
      .file-prev {
        background: #469408;
      }
    }
    &.pdf-file {
      .file-prev {
        background: #d9831f;
      }
    }
    &.archive-file {
      .file-prev {
        background: #9b479f;
      }
    }
    &.audio-file {
      .file-prev {
        background: #FF9800;
      }
    }
    &.video-file {
      .file-prev {
        background: #FF5722;
      }
    }
    &.image-file {
      .file-prev {
        .icon {
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
    &.size-small {
      width: 50px;

      .file-prev {
        font-size: 20px;
      }
    }
    &.size-large {
      width: 180px;

      .file-prev {
        font-size: 60px;
      }
    }
    &.spinner-file {
      .file-prev {
        .icon {
          visibility: hidden;
        }
      }
    }
  }
}
</style>
