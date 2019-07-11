<template>
    <v-app>
      <div class="row">
        <div class="col-lg-3">
          <card :title="'Simple badges'" class="badge-indent">
            <badge :class="'mr-1'">128</badge>
            <badge :class="'mr-1'">5</badge>
            <badge :class="'mr-1'">Babge</badge>
          </card>
        </div>
        <div class="col-lg-3">
          <card :title="'Colored badges'" class="badge-indent">
            <badge :class="'mr-1'">128</badge>
            <badge :class="'mr-1'" :color="'success'">5</badge>
            <badge :class="'mr-1'" :color="'info'">1554</badge>
            <badge :class="'mr-1'" :color="'warning'">29</badge>
            <badge :class="'mr-1'" :color="'danger'">87</badge>
            <badge :class="'mr-1'" :customColor="'#9B479F'">Badge</badge>
          </card>
        </div>
        <div class="col-lg-3">
          <card :title="'Outline badges'" class="badge-indent">
            <badge :class="'mr-1'" :outline="true">128</badge>
            <badge :class="'mr-1'" :color="'success'" :outline="true">5</badge>
            <badge :class="'mr-1'" :color="'info'" :outline="true">1554</badge>
            <badge :class="'mr-1'" :color="'warning'" :outline="true">29</badge>
            <badge :class="'mr-1'" :color="'danger'" :outline="true">87</badge>
            <badge :class="'mr-1'" :customColor="'#9B479F'" :outline="true">Badge</badge>
          </card>
        </div>
        <div class="col-lg-3">
          <card :title="'Square badges'" class="badge-indent">
            <badge :class="'mr-1'" :borderRadius="false">128</badge>
            <badge :class="'mr-1'" :color="'success'" :borderRadius="false">5</badge>
            <badge :class="'mr-1'" :color="'info'" :borderRadius="false">1554</badge>
            <badge :class="'mr-1'" :color="'warning'" :borderRadius="false">29</badge>
            <badge :class="'mr-1'" :color="'danger'" :borderRadius="false">87</badge>
            <badge :class="'mr-1'" :customColor="'#9B479F'" :borderRadius="false">Badge</badge>
          </card>
        </div>

        <div class="col-lg-6">
          <card :title="'Badges with arrow'" class="badge-indent">
            <badge :class="'mr-1'" :arrow="'top'" :borderRadius="false">128</badge>
            <badge :class="'mr-1'" :color="'success'" :borderRadius="false" :arrow="'right'">5</badge>
            <badge :class="'mr-1'" :color="'info'" :borderRadius="false" :arrow="'bottom'">154</badge>
            <badge :class="'mr-1'" :color="'warning'" :borderRadius="false" :arrow="'left'">29</badge>
            <badge :class="'mr-1'" :color="'danger'" :arrow="'top'">87</badge>
            <badge :class="'mr-1'" :customColor="'#9B479F'" :arrow="'right'">55</badge>
            <badge :class="'mr-1'" :color="'success'" :arrow="'bottom'">588</badge>
            <badge :class="'mr-1'" :color="'info'" :arrow="'left'">154</badge>
            <badge :class="'mr-1'" :arrow="'top'" :borderRadius="false" :outline="true">128</badge>
            <badge :class="'mr-1'" :color="'success'" :borderRadius="false" :arrow="'right'" :outline="true">5</badge>
            <badge :class="'mr-1'" :color="'info'" :borderRadius="false" :arrow="'bottom'" :outline="true">154</badge>
            <badge :class="'mr-1'" :color="'warning'" :borderRadius="false" :arrow="'left'" :outline="true">29</badge>
          </card>
        </div>
        <div class="col-lg-6">
          <card :title="'Size badges'" class="badge-indent">
            <badge :class="'mr-1'" :size="'large'">128</badge>
            <badge :class="'mr-1'" :color="'warning'" :borderRadius="false" :size="'large'">Large</badge>
            <badge :class="'mr-1'" :color="'success'" :size="'medium'">518</badge>
            <badge :class="'mr-1'" :color="'danger'" :borderRadius="false" :size="'medium'">Medium</badge>
            <badge :class="'mr-1'" :color="'info'">154</badge>
            <badge :customColor="'#9B479F'" :borderRadius="false">Default</badge>
          </card>
        </div>
        <div class="col-lg-6">
          <card :title="'Badges on button'" class="mb-lg-0">
            <div class="elements-list">
              <v-btn flat>Default <badge>128</badge></v-btn>
              <v-btn color="error" flat><badge :color="'danger'">87</badge> Warning</v-btn>
              <v-btn color="primary">Primary <badge :customColor="'#9CAACE'" :borderRadius="'50%'">8</badge></v-btn>
              <v-btn color="accent"><badge :color="'info'" :customColor="'#fff'" :outline="true">1554</badge> Accent</v-btn>
            </div>
          </card>
        </div>
        <div class="col-lg-6">
          <card :title="'Badges with icon'" class="mb-0 icon-badge-indent">
            <div class="wrap">
              <div class="item">
                <v-badge
                v-model="show"
                color="accent"
                left
              >
                <span slot="badge">6</span>
                <v-icon>mail_outline</v-icon>
              </v-badge>
              </div>

              <div class="item">
                <v-badge
                v-model="show"
                color="error"
                right
            >
              <span slot="badge">1</span>
              <v-icon>shopping_cart</v-icon>
            </v-badge>
              </div>

              <div class="item">
                <v-badge
                v-model="show"
                color="info"
                bottom
                right
              >
                <span slot="badge">1</span>
                <v-icon>notifications_none</v-icon>
              </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  color="error"
                  bottom
                  right
                >
                  <span slot="badge">3</span>
                  <v-icon>local_phone</v-icon>
                </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  :color="'#9B479F'"
                  right
                >
                  <span slot="badge">8</span>
                  <v-icon>person</v-icon>
                </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  color="danger"
                  right
                >
                  <span slot="badge">13</span>
                  <v-icon>notifications</v-icon>
                </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  color="danger"
                  right
                >
                  <span slot="badge">7</span>
                  <v-icon>desktop_mac</v-icon>
                </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  color="danger"
                  right
                >
                  <span slot="badge">2</span>
                  <v-icon>alarm</v-icon>
                </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  color="danger"
                  right
                >
                  <span slot="badge">1</span>
                  <v-icon>home</v-icon>
                </v-badge>
              </div>

              <div class="item">
                <v-badge
                  v-model="show"
                  color="info"
                  right
                >
                  <span slot="badge">9</span>
                  <v-icon>visibility</v-icon>
                </v-badge>
              </div>
            </div>
          </card>
        </div>
      </div>
    </v-app>
</template>

<script>
import card from '../../card/card'
import badge from '../../barge/barge'
export default {
  name: 'badge-body',
  data: () => ({
    show: true
  }),
  components: {
    card,
    badge
  }
}
</script>

<style scoped lang="scss">
.wrap{
  display: flex;
  justify-content: space-between;
}
.v-badge {
  z-index: 4;
}
.v-badge__badge {
  z-index: 80;
}
</style>
