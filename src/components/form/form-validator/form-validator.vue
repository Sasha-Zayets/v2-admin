<template>
  <card>
      <v-form ref="form" v-model="valid" lazy-validation>
      <div class="row">
      <div class="col-md-4">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="First Name"
          required
        ></v-text-field>
      </div>
      <div class="col-md-4">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </div>
      <div class="col-md-4">
        <v-text-field
          v-model="url"
          :rules="urlRules"
          label="Website address"
          required
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
              :rules="dataRules"
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
        <div class="col-md-4">
          <v-text-field
            v-model="range"
            :rules="rangeRules"
            label="Number should be between 5 and 9."
            required
          ></v-text-field>
        </div>
        <div class="col-md-4">
          <v-text-field
            v-model="credit"
            :rules="creditRules"
            label="Credit card"
            required
          ></v-text-field>
        </div>
        <div class="col-md-4">
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="US Phone number (15417543010)"
            required
          ></v-text-field>
        </div>
        <div class="col-md-4">
        <v-text-field
          type="password"
          v-model="passwords"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
      </div>
        <div class="col-md-4">
          <v-text-field
            :type="'password'"
            v-model="confirmPassword"
            :rules="confirmRules"
            label="Confirm Password"
            required
          ></v-text-field>
        </div>
        <div class="col-md-12">
          <p>Gender</p>
          <v-radio-group
            v-model="row"
            :rules="radioRules"
            row
          >
            <v-radio label="Male" value="radio-1"></v-radio>
            <v-radio label="Female" value="radio-2"></v-radio>
          </v-radio-group>
        </div>
        <div class="col-md-12">
          <v-btn
            color="accent"
            :disabled="!valid"
            @click="submit"
          >
            submit
          </v-btn>
        </div>
      </div>
      </v-form>
  </card>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'form-validator',
  data: () => ({
    show1: false,
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length >= 6 || 'Name must be less than 6 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    url: '',
    urlRules: [
      v => !!v || 'Address is required',
      v => /.+/.test(v) || 'Address must be valid'
    ],
    menu: false,
    date: '',
    dataRules: [
      v => !!v || 'Date is required'
    ],
    range: '',
    rangeRules: [
      v => !!v || 'Date is required',
      v => v === '5' || v === '9' || 'Number should be between 5 and 9.'
    ],
    credit: '',
    creditRules: [
      v => !!v || 'Credit card is required',
      v => v.length === 7 || v.length === 10 || v.length === 13 || 'Credit card no valid'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'You must include phone number.',
      v => v.length === 11 || 'You must include a valid phone number.'
    ],
    passwords: '',
    passwordRules: [
      v => !!v || 'You must include password.'
    ],
    confirmPassword: '',
    confirmRules: [
      v => !!v || 'You must include password.'
    ],
    row: '',
    radioRules: [
      v => !!v || 'You must select a gender.'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {

      }
    }
  },
  components: {
    card
  }
}
</script>

<style>
.v-messages__message {
  margin-top: 5px;
}
</style>
