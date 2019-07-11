<template>
    <div>
      <div class="text-center">
        <h4>Some of your Questions:</h4>
        <div class="row">
          <div class="col-xl-3"></div>
          <div class="col-xl-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos labore minima odio possimus praesentium qui
              quibusdam quis recusandae sequi voluptate. Iste nihil totam voluptatibus. Blanditiis, non vitae! Deleniti eum,
              fugiat illum in incidunt labore, magni maxime necessitatibus nisi numquam officia, placeat quo suscipit tempora
              temporibus ut veniam! Labore, omnis, suscipit?</p>
            <div class="clearfix"></div>
          </div>
          <div class="col-xl-3"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <h2 class="h5 mb-2">General</h2>
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in 5"
              :key="i"
            >
              <div slot="header">Item</div>
              <v-icon slot="actions" color="primary">$vuetify.icons.expand</v-icon>
              <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>

        <div class="col-md-6 mb-4">
          <h2 class="h5 mb-2">Expand</h2>
          <v-expansion-panel
            v-model="panel"
            expand
          >
            <v-expansion-panel-content
              v-for="(item, i) in 5"
              :key="i"
            >
              <div slot="header">Item</div>
              <v-icon slot="actions" color="primary">$vuetify.icons.expand</v-icon>
              <v-card>
                <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>

        <div class="col-md-6 mb-4 mb-lg-0">
          <h2 class="h5 mb-2">Popout & Inset</h2>
          <v-expansion-panel popout>
            <v-expansion-panel-content
              v-for="(item,i) in 5"
              :key="i"
            >
              <div slot="header">Item</div>
              <v-icon slot="actions" color="primary">$vuetify.icons.expand</v-icon>
              <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>

        <div class="col-md-6 mb-4 mb-lg-0">
          <h2 class="h5 mb-2">Focusable</h2>
          <v-expansion-panel focusable>
            <v-expansion-panel-content
              v-for="(item,i) in 5"
              :key="i"
            >
              <div slot="header">Item</div>
              <v-icon slot="actions" color="primary">$vuetify.icons.expand</v-icon>
              <v-card>
                <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'faq',
  data: () => ({
    panel: [false, false, false]
  })
}
</script>

<style scoped lang="scss">
.theme--light.v-expansion-panel .v-expansion-panel__container .v-expansion-panel__header .v-expansion-panel__header__icon .v-icon {
  font-size: 15px;
}
.v-expansion-panel__header > .v-expansion-panel__header__icon > i {
  font-size: 15px;
}
.fas {
  font-size: 15px !important;
}
.v-expansion-panel--inset .v-expansion-panel__container, .v-expansion-panel--popout .v-expansion-panel__container {
  max-width: 100%;
}
.v-icon {
  font-size: 15px;
}
</style>
