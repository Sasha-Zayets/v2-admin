<template>
    <div>
      <card :title="'Basic select'">
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'select',
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz']
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
