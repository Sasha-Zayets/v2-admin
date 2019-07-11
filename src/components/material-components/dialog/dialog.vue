<template>
    <div>
      <card :title="'Basic dialog'">
        <p>
          <v-btn
            color="accent"
            @click="dialog = true"
          >
            Open Dialog
          </v-btn>
        </p>
        <p>You chose: {{selectedOption}}</p>
        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline">Dialog</v-card-title>

            <v-card-text>
              What would you like to do?
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="accent"
                flat
                @click="dialogCloseOne()"
              >
                Option 1
              </v-btn>

              <v-btn
                color="error"
                flat
                @click="dialogCloseTwo()"
              >
                Option 2
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'dialog-card',
  data: () => ({
    dialog: false,
    selectedOption: ''
  }),
  methods: {
    dialogCloseOne () {
      this.dialog = false
      this.selectedOption = 'Option 1'
    },
    dialogCloseTwo () {
      this.dialog = false
      this.selectedOption = 'Option 2'
    }
  },
  components: {
    card
  }
}
</script>

<style scoped>

</style>
