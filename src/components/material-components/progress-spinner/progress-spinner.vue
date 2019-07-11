<template>
    <div>
      <card :title="'Basic progress-spinner'">
        <v-progress-circular
          indeterminate
          color="primary"
          :size="70"
        ></v-progress-circular>
      </card>

      <card :title="'Progress mode'">
        <p><strong>Determinate</strong></p>
        <v-progress-circular
          color="primary"
          :size="70"
          :value="value"
        ></v-progress-circular>
        <p>
          <v-btn color="primary" @click="Inc(10)">Increase</v-btn>
          <v-btn color="error" @click="Dec(-10)">Decrease</v-btn>
        </p>
        <p><strong>Indeterminate</strong></p>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="70"
        ></v-progress-circular>
      </card>

      <card :title="'Theming'" :class="'mb-0'">
        <p>
          <v-progress-circular
            indeterminate
            color="primary"
            :size="70"
            width="8"
          ></v-progress-circular>
        </p>
        <p>
          <v-progress-circular
            indeterminate
            color="accent"
            :size="70"
            width="8"
          ></v-progress-circular>
        </p>
        <p>
          <v-progress-circular
            indeterminate
            color="error"
            :size="70"
            width="8"
          ></v-progress-circular>
        </p>
      </card>

    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'progress-spinner',
  data: () => ({
    value: 40
  }),
  methods: {
    Inc (val) {
      this.value += val
    },
    Dec (val) {
      this.value += val
    }
  },
  components: {
    card
  }
}
</script>

<style scoped>

</style>
