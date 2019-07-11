<template>
    <div>
      <card title="Basic form layout">
        <v-text-field
          label="Email address"
        ></v-text-field>

        <v-text-field
          label="Password"
        ></v-text-field>

        <v-btn color="accent">Submit</v-btn>
      </card>

      <card title="Inline form layout">
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-3 col-md-2 col-form-label mb-0">Email</label>
          <div class="col-sm-9 col-md-10">
            <v-text-field
              label="Enter email"
            ></v-text-field>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPass" class="col-sm-3 col-md-2 col-form-label mb-0">Password</label>
          <div class="col-sm-9 col-md-10">
            <v-text-field
              label="Enter password"
            ></v-text-field>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-3 col-md-2"></div>
          <div class="col-sm-9 col-md-10">
            <v-btn color="error">Submit</v-btn>
          </div>
        </div>
      </card>

      <card title="Grid form" class="mb-0">
        <div class="row">
          <div class="col-md-3">
            <v-text-field
              label="Col 3"
            ></v-text-field>
          </div>
          <div class="col-md-9">
            <v-text-field
              label="Col 9"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Col 6"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-text-field
              label="Col 6"
            ></v-text-field>
          </div>
          <div class="col-md-9">
            <v-text-field
              label="Col 9"
            ></v-text-field>
          </div>
          <div class="col-md-3">
            <v-text-field
              label="Col 3"
            ></v-text-field>
          </div>
          <div class="col-md-4">
            <v-text-field
              label="Col 4"
            ></v-text-field>
          </div>
          <div class="col-md-4">
            <v-text-field
              label="Col 4"
            ></v-text-field>
          </div>
          <div class="col-md-4">
            <v-text-field
              label="Col 4"
            ></v-text-field>
          </div>
        </div>
      </card>

    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'form-layout',
  components: {
    card
  }
}
</script>

<style scoped>
label {
  display: flex;
  align-items: center;
}
</style>
