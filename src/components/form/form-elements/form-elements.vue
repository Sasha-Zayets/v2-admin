<template>
  <div>
    <card title="Material inputs">
      <div class="row">
        <div class="col-md-4">
          <v-text-field
            label="First Name"
            prepend-icon="perm_identity"
          ></v-text-field>
        </div>

        <div class="col-md-4">
          <v-text-field
            label="Last Name"
            prepend-icon="people_outline"
          ></v-text-field>
        </div>

        <div class="col-md-4">
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Date of birth"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </div>
      </div>

      <v-textarea
        name="input-7-1"
        label="Address"
        value=""
        rows="2"
        hint="Hint text"
      ></v-textarea>

      <div class="row">
        <div class="col-md-4">
          <v-select :items="states" v-model="a1" label="State" autocomplete></v-select>
        </div>
        <div class="col-md-4">
          <v-text-field
            label="City"
          ></v-text-field>
        </div>
        <div class="col-md-4">
          <v-text-field
            label="Postal Code"
            :count="6"
          ></v-text-field>
        </div>
      </div>

      <v-textarea
        name="input-7-1"
        label="Biography"
        rows="5"
        value=""
        hint="Hint text"
      ></v-textarea>
    </card>

    <card title="Material checkboxes">
      <div class="mb-4">
        <v-checkbox
          :label="'Accent checkbox'"
          v-model="checkbox"
          color="accent"
        ></v-checkbox>
      </div>

      <div class="mb-4">
        <v-checkbox
          :label="'Primary checkbox'"
          v-model="checkbox2"
          color="primary"
        ></v-checkbox>
      </div>

      <div class="">
        <v-checkbox
          :label="'Warning checkbox'"
          v-model="checkbox3"
          color="error"
          indeterminate
        ></v-checkbox>
      </div>
    </card>

    <card :title="'Material radio buttons'">
      <v-radio-group  v-model="row5">
        <v-radio label="Winter" value="Winter"></v-radio>
        <v-radio label="Spring" value="Spring"></v-radio>
        <v-radio label="Summer" value="Summer"></v-radio>
        <v-radio label="Autumn" value="Autumn"></v-radio>
      </v-radio-group>
      <p>
        Your favorite season is: <strong>{{row5}}</strong>
      </p>
    </card>

    <card :title="'Material sliders'">
      <v-slider
        class="slider"
        v-model="slider4"
        thumb-label
      ></v-slider>
    </card>

    <card :title="'Material slides'">
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

    <card :title="'Material chips'" class="mb-0">
      <v-chip text-color="black">Default</v-chip>

      <v-chip color="primary" text-color="white">Primary</v-chip>

      <v-chip color="accent" text-color="white">Accent</v-chip>

      <v-chip color="error" text-color="white">Warning</v-chip>
    </card>
  </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'form-elements',
  data: () => ({
    checkbox: false,
    checkbox2: false,
    checkbox3: false,
    row5: '',
    slider4: 0,
    switch2: false,
    switch3: true,
    switch4: true,
    date: '',
    menu: false,
    a1: null,
    states: [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Federated States of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
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
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palau',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Island',
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
.slider {
  width: 150px;
}
</style>
