<template>
    <div>
      <card :title="'Snackbar config'">
        <v-text-field
          v-model="text"
          label="Message"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="action"
          label="Action"
          type="text"
        ></v-text-field>
        <v-btn
          color="primary"
          dark
          @click="snackbar = true"
        >
          Show Snackbar
        </v-btn>
      </card>
      <v-snackbar
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ text }}
        <v-btn
          color="accent"
          flat
          @click="snackbar = false"
        >
          {{action}}
        </v-btn>
      </v-snackbar>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'snackbar',
  data: () => ({
    snackbar: false,
    y: 'bottom',
    x: null,
    mode: '',
    timeout: 6000,
    text: 'Disco party!',
    action: 'Dance'
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
