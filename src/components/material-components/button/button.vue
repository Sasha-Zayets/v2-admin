<template>
  <div>
    <card :title="'Flat buttons'">
      <div class="elements-list">
        <v-btn flat>Default</v-btn>
        <v-btn flat color="primary">Primary</v-btn>
        <v-btn flat color="accent">Accent</v-btn>
        <v-btn flat color="error">Warning</v-btn>
        <v-btn flat disabled>Disabled</v-btn>
      </div>
    </card>

    <card :title="'Raised buttons'">
    <div class="elements-list">
      <v-btn>Default</v-btn>
      <v-btn color="primary">Primary</v-btn>
      <v-btn color="accent">Accent</v-btn>
      <v-btn color="error">Warning</v-btn>
      <v-btn disabled>Disabled</v-btn>
    </div>
  </card>

    <card :title="'Icon buttons'">
      <div class="elements-list">
        <v-btn flat icon><v-icon>home</v-icon></v-btn>
        <v-btn flat icon color="primary"><v-icon>add</v-icon></v-btn>
        <v-btn flat icon color="accent"><v-icon>settings</v-icon></v-btn>
        <v-btn flat icon color="error"><v-icon>thumb_up</v-icon></v-btn>
        <v-btn flat icon disabled><v-icon>check</v-icon></v-btn>
      </div>
    </card>

    <card :title="'Floating Action Buttons (FABs)'">
      <div class="elements-list">
        <v-btn fab ><v-icon>home</v-icon></v-btn>
        <v-btn fab color="primary"><v-icon>add</v-icon></v-btn>
        <v-btn fab color="accent"><v-icon>settings</v-icon></v-btn>
        <v-btn fab color="error"><v-icon>thumb_up</v-icon></v-btn>
        <v-btn fab disabled><v-icon>check</v-icon></v-btn>
      </div>
    </card>

    <card :title="'Mini Floating Action Buttons (Mini FABs)'">
      <div class="elements-list">
        <v-btn fab small><v-icon>home</v-icon></v-btn>
        <v-btn fab small color="primary"><v-icon>add</v-icon></v-btn>
        <v-btn fab small color="accent"><v-icon>settings</v-icon></v-btn>
        <v-btn fab small color="error"><v-icon>thumb_up</v-icon></v-btn>
        <v-btn fab small disabled><v-icon>check</v-icon></v-btn>
      </div>
    </card>

    <card :title="'Button toggles'" class="mb-0">
      <v-btn-toggle v-model="toggle_exclusive">
        <v-btn flat value="left">
          <v-icon>format_align_left</v-icon>
        </v-btn>
        <v-btn flat value="center">
          <v-icon>format_align_center</v-icon>
        </v-btn>
        <v-btn flat value="right">
          <v-icon>format_align_right</v-icon>
        </v-btn>
        <v-btn flat value="justify">
          <v-icon>format_align_justify</v-icon>
        </v-btn>
      </v-btn-toggle>
      <div class="mt-4">Selected value: {{toggle_exclusive}}</div>
    </card>
  </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'but',
  data: () => ({
    toggle_exclusive: ''
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
