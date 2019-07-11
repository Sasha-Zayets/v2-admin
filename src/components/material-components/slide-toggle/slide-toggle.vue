<template>
    <div>
      <card :title="'Basic'">
        <v-switch
          color="accent"
          :label="'Slide me!'"
          v-model="switch1"
        ></v-switch>
      </card>

      <card :title="'Disabled'">
        <v-switch
          :label="'Disabled'"
          disabled
        ></v-switch>
      </card>

      <card :title="'Theming'">
        <v-switch
          :label="'Primary Slide Toggle'"
          color="primary"
          v-model="switch2"
        ></v-switch>
        <v-switch
          :label="'Accent Slide Toggle'"
          color="accent"
          v-model="switch3"
        ></v-switch>
        <v-switch
          :label="'Warning Slide Toggle'"
          color="error"
          v-model="switch4"
        ></v-switch>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'slide-toggle',
  data: () => ({
    switch1: false,
    switch2: true,
    switch3: true,
    switch4: true
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
