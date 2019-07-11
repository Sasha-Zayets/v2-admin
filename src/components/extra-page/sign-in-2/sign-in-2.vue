<template>
  <div class="sign-in-host">
    <card :title="'Sign in with your app id to continue'" :align="'center'" class="card">
      <form>
        <v-text-field
          v-model="name"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          required
        ></v-text-field>

        <div class="text-left mb-module">
          <v-checkbox
            v-model="checkbox"
            label="Keep me signed in"
            required
          ></v-checkbox>
        </div>

        <v-btn color="primary" type="submit">Sign In</v-btn>

        <div class="additional-info">
          <a href="/extra-layout/sign-up">Sign up</a>
          <span class="divider"></span>
          <a href="/extra-layout/forgot">Forgot your password?</a>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'sign-in-2',
  data: () => ({
    name: '',
    email: '',
    checkbox: ''
  }),
  components: {
    card
  }
}
</script>

<style scoped lang="scss">
  @import '../../../assets/sass/variable';

  .sign-in-host {
    background: url('../../../assets/content/login-bg.jpg') 50% 50% no-repeat;
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
        v-btn {
          width: 100%;
        }
        .additional-info {
          background: rgba(#000,.1);
          margin: $module (-$module) (-$module);
          padding: $module/2 $module;

          .divider {
            border-left: 1px solid rgba(#000,.2);
            display: inline-block;
            height: 18px;
            margin: 0 10px;
            vertical-align: bottom;
          }
        }
      }
    }
  }
</style>
