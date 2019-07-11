<template>
    <div>
      <card :title="'Configurable checkbox'">
        <div class="row">
          <div class="col col-auto">
            <v-checkbox class="example-margin" :class="'mt-0'" v-model="checked" label="Checked"></v-checkbox>
          </div>
          <div class="col col-auto">
            <v-checkbox class="example-margin" :class="'mt-0'" v-model="indeterminate" label="Indeterminate"></v-checkbox>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col col-auto">
            <label>Align:</label>
            <v-radio-group v-model="align">
              <v-radio value="start" color="primary" label="Start"></v-radio>
              <v-radio value="end" label="End"></v-radio>
            </v-radio-group>
          </div>

        </div>

        <br>

        <div>
          <v-checkbox class="example-margin" :class="'mt-0'" v-model="disabled" label="Disabled"></v-checkbox>
        </div>

        <h6>Result</h6>

        <div>
          <v-checkbox
            class="example-margin"
            :class="'mt-0'"
            v-model="checked"
            :indeterminate="indeterminate"
            :disabled="disabled"
            label="I'm a checkbox"
          >
          </v-checkbox>
        </div>
      </card>
      <card :title="'Theming'" class="mb-0">
        <div class="row">
          <div class="col col-auto">
            <v-checkbox :checked="true" :class="'mt-0'" color="primary" label="Primary">Primary</v-checkbox>
          </div>
          <div class="col col-auto">
            <v-checkbox :checked="true" :class="'mt-0'" color="accent" label="Accent">Accent</v-checkbox>
          </div>
          <div class="col col-auto">
            <v-checkbox :checked="true" :class="'mt-0'" color="error" label="Warning">Warning</v-checkbox>
          </div>
        </div>
      </card>

    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'checkbox',
  data: () => ({
    pageTitle: 'Checkbox',
    checked: false,
    indeterminate: false,
    align: 'start',
    disabled: false
  }),
  components: {
    card
  }
}
</script>

<style>
label {
  margin-bottom: 0;
}
.v-input__slot {
  margin-bottom: 0 !important;
}
</style>
