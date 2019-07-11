<template>
    <div>
      <card :title="'Basic progress-bar'">
        <v-progress-linear :indeterminate="true"></v-progress-linear>
      </card>

      <card :title="'Progress Modes'">
        <p><strong>Determinate</strong></p>
        <v-progress-linear v-model="value1" color="error"></v-progress-linear>
        <p>
          <v-btn color="primary" @click="Increase(10)">Increase</v-btn>
          <v-btn color="error" @click="Decrease(-10)">Decrease</v-btn>
        </p>

        <p><strong>Indeterminate</strong></p>
        <v-progress-linear :indeterminate="true"></v-progress-linear>

        <p><strong>Buffer</strong></p>
        <v-progress-linear v-model="value2" color="primary" :buffer-value="buffer" buffer></v-progress-linear>
        <p>
          <v-btn color="primary" @click="IncreaseBuffer(10)">Increase</v-btn>
          <v-btn color="error" @click="DecreaseBuffer(-10)">Decrease</v-btn>
          <v-btn color="primary" @click="IncreaseBufferValue(10)">Buffer Increase</v-btn>
          <v-btn color="error" @click="DecreaseBufferValue(-10)">Buffer Decrease</v-btn>
        </p>

        <p><strong>Query</strong></p>
        <v-progress-linear :indeterminate="true" :query="true"></v-progress-linear>
      </card>

      <card :title="'Theming'">
        <v-progress-linear :indeterminate="true"></v-progress-linear>
        <v-progress-linear :indeterminate="true" color="accent"></v-progress-linear>
        <v-progress-linear :indeterminate="true" color="error"></v-progress-linear>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'progress-bar',
  data: () => ({
    value1: 40,
    value2: 30,
    buffer: 70
  }),
  methods: {
    Increase (val) {
      this.value1 += val
    },
    Decrease (val) {
      this.value1 += val
    },
    IncreaseBuffer (val) {
      this.value2 += val
    },
    DecreaseBuffer (val) {
      this.value2 += val
    },
    IncreaseBufferValue (val) {
      this.buffer += val
    },
    DecreaseBufferValue (val) {
      this.buffer += val
    }
  },
  components: {
    card
  }
}
</script>

<style scoped>

</style>
