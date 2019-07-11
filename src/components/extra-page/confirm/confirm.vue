<template>
  <div class="confirm-host">
    <card :title="'Confirm Email'" :align="'center'" class="card">
      <span class="material-icons">mail_outline</span>
      <p class="small">An email has been send to username@mail.com. Please check for an email from us and click on the included link to reset your password.</p>
      <div class="additional-info">
        <a href="/extra-layout/sign-in">Return to Sign in</a>
      </div>
    </card>
  </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'confirm',
  components: {
    card
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/sass/variable';

.confirm-host {
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
    .material-icons {
      color: main-color(300);
      font-size: 100px;
    }
    .additional-info {
      background: rgba(#000,.1);
      margin: $module (-$module) (-$module);
      padding: $module/2 $module;
    }
  }
}

</style>
