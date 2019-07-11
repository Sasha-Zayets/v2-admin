<template>
  <div class="sign-up">
    <card :title="'Create your account'" :align="'center'" class="card">
      <form>
        <v-text-field
          v-model="email"
          label="Email address"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          required
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          required
        ></v-text-field>

        <div class="text-left mb-module">
          <v-checkbox
            v-model="checkbox"
            label="I have read and agree to the terms of service."
            required
          ></v-checkbox>
        </div>

        <v-btn color="primary" type="submit">Sign In</v-btn>

        <div class="additional-info">
          Already have an account?
          <a href="/extra-layout/sign-in">Sign in</a>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'sign-up-1',
  data: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: ''
  }),
  components: {
    card
  }
}
</script>

<style scoped lang="scss">
  @import '../../../assets/sass/variable';

  .sign-up {
    background: url('../../../assets/content/signup-bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    width: 100%;

    .card {
      margin: 0 auto;
      max-width: 400px;

      .card-wrap {
        border: 0;
      }
      form {
        .v-btn {
          width: 100%;
        }
        .additional-info {
          background: rgba(#000,.1);
          margin: $module (-$module) (-$module);
          padding: $module/2 $module;
        }
      }
    }
  }
</style>
