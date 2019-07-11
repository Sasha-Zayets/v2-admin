<template>
    <div>
      <card :title="'Basic tabs'">
        <v-tabs
          v-model="active"
          slider-color="primary"
        >
          <v-tab
            v-for="item in 6"
            :key="item"
          >
            Tab {{item}}
          </v-tab>
          <v-tab-item
            v-for="items in 6"
            :key="items"
          >
            <v-card flat>
              <v-card-text>
                {{text}}
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </card>
    </div>
</template>

<script>
import card from '../../card/card'
export default {
  name: 'tabs',
  data: () => ({
    active: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n' +
    '              Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n' +
    '              In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n' +
    '              feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n' +
    '              orci enim rutrum enim, vel tempor sapien arcu a tellus.'
  }),
  components: {
    card
  }
}
</script>

<style scoped>
.v-tabs__container {
  border-bottom: 1px solid #E0E0E0;
  justify-content: space-between;
}
.v-tabs__div {
  width: 100%;
}
</style>
