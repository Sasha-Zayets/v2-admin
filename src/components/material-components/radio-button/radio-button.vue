<template>
    <div>
      <card :title="'Basic radios'">
        <v-radio-group  v-model="row" row>
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>
      </card>

      <card :title="'Column Layout'">
        <v-radio-group  v-model="row2">
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>
      </card>

      <card :title="'Align'">
        <v-radio-group  v-model="row3">
          <v-radio label="Start" value="Start"></v-radio>
          <v-radio label="End" value="End"></v-radio>
        </v-radio-group>
      </card>

      <card :title="'Disabled'">
        <v-radio-group  v-model="row4">
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2 "></v-radio>
          <v-radio label="Disabled Option" value="radio-3" disabled></v-radio>
        </v-radio-group>
      </card>

      <card :title="'Disabled'" :class="'mb-0'">
        <v-radio-group  v-model="row5">
          <v-radio label="Winter" value="Winter"></v-radio>
          <v-radio label="Spring" value="Spring"></v-radio>
          <v-radio label="Summer" value="Summer"></v-radio>
          <v-radio label="Autumn" value="Autumn"></v-radio>
        </v-radio-group>
        <p>
          Your favorite season is: {{row5}}
        </p>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'radio-button',
  data: () => ({
    row: 'radio-1',
    row2: 'radio-1',
    row3: 'Start',
    row4: 'radio-1',
    row5: ''
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
