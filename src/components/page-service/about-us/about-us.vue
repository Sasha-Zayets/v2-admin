<template>
    <v-app>
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'#3c4e62'" :customColor="'#fff'" class="info-card">
            <div class="title text-uppercase">Orders</div>
            <div class="count">2,145</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+17%</badge> <small>from previous period</small>
            <v-icon class="icon-card-position">shopping_basket</v-icon>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'#3c4e62'" :customColor="'#fff'" class="info-card">
            <div class="title text-uppercase">Revenue</div>
            <div class="count">$ 50,24</div>
            <small>11750</small>
            <v-icon class="icon-card-position">equalizer</v-icon>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'#3c4e62'" :customColor="'#fff'" class="info-card">
            <div class="title text-uppercase">Products</div>
            <div class="count">2,543</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+210</badge>
            <v-icon class="icon-card-position">monetization_on</v-icon>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'#3c4e62'" :customColor="'#fff'" class="info-card">
            <div class="title text-uppercase">Sold</div>
            <div class="count">1,005</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+24%</badge>
            <v-icon class="icon-card-position">donut_large</v-icon>
          </card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <card :title="'About A2 admin'">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque
              modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut
              et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis
              rerum ullam velit veritatis vitae.</p>

            <div class="row">
              <div class="col-md-6">
                <p class="mb-1"><strong>Wordpress</strong></p>
                <v-progress-linear value="90"></v-progress-linear>

                <p class="mb-1"><strong>Magento</strong></p>
                <v-progress-linear value="80"></v-progress-linear>

                <p class="mb-1"><strong>Opencart</strong></p>
                <v-progress-linear value="60"></v-progress-linear>

                <p class="mb-1"><strong>Drupal</strong></p>
                <v-progress-linear value="30"></v-progress-linear>
                <div class="clearfix"></div>
              </div>

              <div class="col-md-6">
                <p class="mb-1"><strong>Angular</strong></p>
                <v-progress-linear color="accent" value="98"></v-progress-linear>

                <p class="mb-1"><strong>React</strong></p>
                <v-progress-linear color="accent" value="85"></v-progress-linear>

                <p class="mb-1"><strong>Vue.js</strong></p>
                <v-progress-linear color="accent" value="40"></v-progress-linear>

                <p class="mb-1"><strong>Backbone.js</strong></p>
                <v-progress-linear color="accent" value="38"></v-progress-linear>
                <div class="clearfix"></div>
              </div>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam cumque dicta earum, iure maiores neque
              nesciunt officia quisquam ullam.</p>
          </card>
        </div>
        <div class="col-md-6">
          <card title="Audience Overview">
            <lines
              :data="chartData"
              :options="{responsive: true, maintainAspectRatio: false}"
              class="charts"
            ></lines>
          </card>
        </div>
      </div>

      <div class="text-center">
        <h4><strong>Meet the Team</strong></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eum.</p>
        <div class="clearfix"></div>
      </div>

      <div class="row">
        <div class="col-md-6 col-xl-3">
          <card :align="'center'" class="mb-xl-0">
            <img :src="'/content/person-4.jpg'" width="150" height="150" alt="">
            <h5><strong>Mark Wahlberg</strong></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius
              eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>
          </card>
        </div>
        <div class="col-md-6 col-xl-3">
          <card :align="'center'" class="mb-xl-0">
            <img :src="'/content/person-1.jpg'" width="150" height="150" alt="">
            <h5><strong>Lindsay Lohan</strong></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius
              eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>
          </card>
        </div>
        <div class="col-md-6 col-xl-3">
          <card :align="'center'" class="mb-md-0">
            <img :src="'/content/person-3.jpg'" width="150" height="150" alt="">
            <h5><strong>Mary Jane</strong></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius
              eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>
          </card>
        </div>
        <div class="col-md-6 col-xl-3">
          <card :align="'center'" class="mb-0">
            <img :src="'/content/person-5.jpg'" width="150" height="150" alt="">
            <h5><strong>Tom Brady</strong></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius
              eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>
          </card>
        </div>
      </div>

    </v-app>
</template>

<script>
import card from '../../card/card'
import badge from '../../barge/barge'
import lines from '../../chart/line'
export default {
  name: 'about-us',
  data: () => ({
    chartData: {
      labels: [
        'Mon.',
        'Tue.',
        'Wed.',
        'Thu.',
        'Fri.',
        'Sat.',
        'Sun.'
      ],
      datasets: [
        {
          data: [30, 42, 46, 51, 65, 73, 80],
          label: 'Users',
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: 'rgba(93,173,224,0.2)',
          borderColor: '#5dade0',
          pointBackgroundColor: '#5dade0',
          pointBorderColor: '#0e7cc5',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#000'
        },
        {
          data: [42, 43, 52, 47, 65, 70, 79],
          label: 'Pages',
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: 'rgba(255,140,0,0.2)',
          borderColor: '#ff8c00',
          pointBackgroundColor: '#ff8c00',
          pointBorderColor: '#FF630B',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#000'
        },
        {
          data: [51, 48, 45, 56, 61, 69, 67],
          label: 'Visits',
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: 'rgba(220,20,60,0.2)',
          borderColor: '#dc143c',
          pointBackgroundColor: '#dc143c',
          pointBorderColor: '#7E2303',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#000'
        }
      ]
    }
  }),
  components: {
    card,
    badge,
    lines
  }
}
</script>

<style scoped lang="scss">
  .icon-card-position {
    color: rgba(255,255,255,.2);
    font-size: 60px;
    height: auto;
    position: absolute;
    right: 1.5714286rem;
    top: 1.5714286rem;
    width: auto;
  }
  .info-card {
    .count {
      font-size: 32px;
      color: white;
    }
    .title {
      color: white;
      font-size: 1rem !important;
    }
    small {
      color: white;
    }
  }
</style>
