<template>
    <div>
      <card :title="'Basic slider'">
        <v-slider
          v-model="slider"
          class="slider"
        ></v-slider>
      </card>

      <card :title="'Selecting a value'">
        <v-slider
          color="accent"
          v-model="slider2"
          class="slider"
          max="4"
          :step="'0.5'"
          :label="slider2"
        ></v-slider>
      </card>

      <card :title="'Adding ticks'">
        <v-slider
          class="slider"
          v-model="slider4"
          thumb-label
        ></v-slider>
      </card>

      <card :title="'Tick marks'">
        <v-slider
          color="accent"
          class="slider"
          v-model="value"
          step="10"
          ticks="always"
        ></v-slider>

        <v-slider
          color="accent"
          class="slider"
          v-model="value2"
          step="25"
          ticks="always"
        ></v-slider>
      </card>

      <card :title="'Disabled'">
        <v-slider
          color="accent"
          class="slider"
          disabled
        ></v-slider>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'slider',
  data: () => ({
    slider: 0,
    slider2: 1,
    slider3: 0,
    slider4: 0,
    value: 0,
    value2: 0
  }),
  components: {
    card
  }
}
</script>

<style scoped>
.slider {
  max-width: 100px;
}
</style>
