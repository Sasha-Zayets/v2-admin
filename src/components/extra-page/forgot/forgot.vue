<template>
  <div class="forgot-host">
    <card :title="'Reset Your Password'" :align="'center'" class="card">
      <form>
        <v-text-field
          label="Email"
        ></v-text-field>

        <p class="text-left small">Enter your email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>

         <v-btn color="accent" type="submit">Reset</v-btn>
        <div class="additional-info">
          <a href="/extra-layout/sign-in">Sign In</a>
          <span class="divider"></span>
          <a href="/extra-layout/sign-up">Sign up</a>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'forgot',
  components: {
    card
  }
}
</script>

<style scoped lang="scss">
  @import '../../../assets/sass/variable';

  .forgot-host {
    background: main-color(300);
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;

    .card {
      margin: 0 auto;
      max-width: 400px;

      .card-wrap {
        border: 0;
      }
      form {
        button {
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
