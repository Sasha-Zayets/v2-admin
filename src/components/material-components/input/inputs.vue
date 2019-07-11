<template>
    <div>
      <card :title="'Basic input'">
        <v-text-field
          label="Input placeholder"
          required
        ></v-text-field>
      </card>

      <card :title="'Prefix and Suffix'">
        <v-text-field
          label=" Input placeholder"
          required
          prefix="+1 "
          append-icon="mode_edit"
        >
        </v-text-field>
      </card>

      <card :title="'Hint Labels'">
        <v-text-field
          v-model="message1"
          label="Input placeholder"
          :rules="[rules.required, rules.counter]"
          counter
          maxlength="20"
        ></v-text-field>
      </card>

      <card :title="'Divider Color'">
        <v-text-field
          label="Default color"
          required
        ></v-text-field>
        <v-text-field
          label="Accent color"
          required
          color="accent"
        ></v-text-field>
        <v-text-field
          label="Warning color"
          required
          color="error"
        ></v-text-field>
      </card>

      <card :title="'Textarea'">
        <v-textarea
          name="input-7-1"
          label="Textarea placeholder"
          auto-grow
          rows="1"
          value="1600 Amphitheatre Pkwy"
          hint="Hint text"
        ></v-textarea>
      </card>

      <card :title="'Autocomplete'">
        <v-combobox
          v-model="select"
          :items="items"
          label="State"
        ></v-combobox>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'inputs',
  data: () => ({
    message1: 'Value',
    rules: {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    },
    select: '',
    items: [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ]
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
