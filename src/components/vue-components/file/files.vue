<template>
    <v-app>
      <card :title="'Files Types'">
        <file :title="'file-name'" :type="'*'"></file>
        <file :type="'doc'" :title="'file-name'"></file>
        <file :type="'xlx'" :title="'file-name'"></file>
        <file :type="'pdf'" :title="'file-name'"></file>
        <file :type="'zip'" :title="'file-name'"></file>
        <file :type="'mp3'" :title="'file-name'"></file>
        <file :type="'mp4'" :title="'file-name'"></file>
        <file :type="'jpg'" :title="'file-name'" :image="'/content/file-1.jpg'"></file>
      </card>

      <card :title="'Files Size'">
        <p><strong>Small</strong></p>
        <p>
          <file :title="'file-name'" :size="'small'" :type="'*'"></file>
          <file :type="'doc'" :title="'file-name'" :size="'small'"></file>
          <file :type="'xlx'" :title="'file-name'" :size="'small'"></file>
          <file :type="'pdf'" :title="'file-name'" :size="'small'"></file>
          <file :type="'zip'" :title="'file-name'" :size="'small'"></file>
          <file :type="'mp3'" :title="'file-name'" :size="'small'"></file>
          <file :type="'mp4'" :title="'file-name'" :size="'small'"></file>
          <file :type="'jpg'" :title="'file-name'" :image="'/content/file-2.jpg'" :size="'small'"></file>
        </p>
        <p><strong>Normal</strong></p>
        <p>
          <file :title="'file-name'" :type="'*'"></file>
          <file :type="'doc'" :title="'file-name'"></file>
          <file :type="'xlx'" :title="'file-name'"></file>
          <file :type="'pdf'" :title="'file-name'"></file>
          <file :type="'zip'" :title="'file-name'"></file>
          <file :type="'mp3'" :title="'file-name'"></file>
          <file :type="'mp4'" :title="'file-name'"></file>
          <file :type="'jpg'" :title="'file-name'" :image="'/content/file-3.jpg'"></file>
        </p>
        <p><strong>Large</strong></p>
        <p>
          <file :title="'file-name'" :size="'large'" :type="'*'"></file>
          <file :type="'doc'" :title="'file-name'" :size="'large'"></file>
          <file :type="'xlx'" :title="'file-name'" :size="'large'"></file>
          <file :type="'pdf'" :title="'file-name'" :size="'large'"></file>
          <file :type="'zip'" :title="'file-name'" :size="'large'"></file>
          <file :type="'mp3'" :title="'file-name'" :size="'large'"></file>
          <file :type="'mp4'" :title="'file-name'" :size="'large'"></file>
          <file :type="'jpg'" :title="'file-name'" :image="'/content/file.jpg'" :size="'large'"></file>
        </p>
      </card>
    </v-app>
</template>

<script>
import card from '../../card/card'
import file from '../../file/file'
export default {
  name: 'files',
  components: {
    card,
    file
  }
}
</script>

<style scoped>

</style>
