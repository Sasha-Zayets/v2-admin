<template>
    <div>
      <card :title="'Basic toolbar'">
        <v-toolbar>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </card>

      <card :title="'Multiple rows'">
        <v-toolbar color="primary">
          <v-toolbar-title class="title-toolbar">First Row</v-toolbar-title>
        </v-toolbar>
        <v-toolbar color="primary">
          <v-toolbar-title class="title-toolbar">Second Row</v-toolbar-title>
        </v-toolbar>
        <v-toolbar color="primary">
          <v-toolbar-title class="title-toolbar">Third Row</v-toolbar-title>
        </v-toolbar>
      </card>

      <card :title="'Positioning toolbar content'">
        <v-toolbar color="primary">
          <v-toolbar-title class="title-toolbar">Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title class="title-toolbar">Right Aligned</v-toolbar-title>
        </v-toolbar>
      </card>

      <card :title="'Theming'">
        <v-toolbar color="primary">
          <v-toolbar-title class="title-toolbar">Title</v-toolbar-title>
        </v-toolbar>
        <v-toolbar color="accent">
          <v-toolbar-title class="title-toolbar">Title</v-toolbar-title>
        </v-toolbar>
        <v-toolbar color="error">
          <v-toolbar-title class="title-toolbar">Title</v-toolbar-title>
        </v-toolbar>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'toolbar',
  components: {
    card
  }
}
</script>

<style scoped>
.title-toolbar {
  color: white;
}
</style>
