<template>
    <div>
      <card :title="'Simple menu'">
        <v-menu bottom>
          <v-btn
            slot="activator"
            color="primary"
          >
            Menu
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="item"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </card>

      <card :title="'Icons'">
        <v-menu bottom right>
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon color="black">more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
              @click="item"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'menu',
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  }),
  components: {
    card
  }
}
</script>

<style scoped>

</style>
