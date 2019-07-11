<template>
    <div>
      <card :title="'Inline chips'" class="mb-0">
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
  name: 'chips',
  components: {
    card
  }
}
</script>

<style scoped>

</style>
