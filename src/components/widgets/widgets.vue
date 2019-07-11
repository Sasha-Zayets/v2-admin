<template>
    <div>
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <card :bgColor="'danger'" class="info-card">
            <div class="title text-uppercase">Orders</div>
            <div class="count">2,145</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+17%</badge> <small>from previous period</small>
            <v-icon>shopping_basket</v-icon>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :bgColor="'warning'" class="info-card">
            <div class="title text-uppercase">Revenue</div>
            <div class="count">$ 50,24</div>
            <small>11750</small>
            <v-icon>equalizer</v-icon>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :bgColor="'info'" class="info-card">
            <div class="title text-uppercase">Products</div>
            <div class="count">2,543</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+210</badge>
            <v-icon>monetization_on</v-icon>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :bgColor="'success'" class="info-card">
            <div class="title text-uppercase">Sold</div>
            <div class="count">1,005</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+24%</badge>
            <v-icon>donut_large</v-icon>
          </card>
        </div>

        <div class="clearfix"></div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'rgba(220,20,60,0.6)'" :customColor="'#fff'" :bgImage="'/content/card-4.jpg'" class="info-card">
            <div class="title text-uppercase">Orders</div>
            <div class="count">2,145</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+17%</badge> <small>from previous period</small>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'rgba(255,140,0,0.9)'" :customColor="'#fff'" :bgImage="'/content/card-5.jpg'" class="info-card">
            <div class="title text-uppercase">Revenue</div>
            <div class="count">$ 50,24</div>
            <small>11750</small>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'rgba(0,191,252,0.9)'" :customColor="'#fff'" :bgImage="'/content/card-6.jpg'" class="info-card">
            <div class="title text-uppercase">Products</div>
            <div class="count">2,543</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+210</badge>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :customBgColor="'rgba(0,128,0,0.8)'" :customColor="'#fff'" :bgImage="'/content/card-7.jpg'" class="info-card">
            <div class="title text-uppercase">Sold</div>
            <div class="count">1,005</div>
            <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+24%</badge>
          </card>
        </div>

        <div class="clearfix"></div>

        <div class="col-md-6 col-xl-3">
          <card :outline="true" :bgColor="'danger'" class="info-card bg-no">
            <div class="title text-uppercase">Orders</div>
            <div class="count">2,145</div>
            <badge :color="'danger'">+17%</badge> <small>from previous period</small>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :outline="true" :bgColor="'warning'" class="info-card bg-no">
            <div class="title text-uppercase">Revenue</div>
            <div class="count">$ 50,24</div>
            <small>11750</small>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :outline="true" :bgColor="'info'" class="info-card bg-no">
            <div class="title text-uppercase">Products</div>
            <div class="count">2,543</div>
            <badge :color="'info'">+210</badge>
          </card>
        </div>

        <div class="col-md-6 col-xl-3">
          <card :outline="true" :bgColor="'success'" class="info-card bg-no">
            <div class="title text-uppercase">Sold</div>
            <div class="count">1,005</div>
            <badge :color="'success'">+24%</badge>
          </card>
        </div>

        <div class="clearfix"></div>

        <div class="col-xl-4">
          <card :bgColor="''" class="chart-card">
            <div class="chart">
              <pei
                class="content-chart"
                :data="pieData"
                :options="{responsive: true, maintainAspectRatio: false}"
              ></pei>
            </div>
            <div class="info-chart">
              <div class="title"><strong>930</strong> <small>Resolved</small></div>
              <div class="small">More than 70% resolved issues</div>
            </div>
          </card>
        </div>

        <div class="col-xl-4">
          <card :bgColor="''" class="chart-card">
            <div class="chart">
              <doughnut
                class="content-chart"
                :data="DoughnutData"
                :options="{responsive: true, maintainAspectRatio: false}"
              ></doughnut>
            </div>
            <div class="info-chart">
              <div class="title"><strong>466</strong> <small>Unresolved</small></div>
              <div class="small">Less than 30% unresolved issues</div>
            </div>
          </card>
        </div>

        <div class="col-xl-4">
          <card :bgColor="''" class="chart-card">
            <div class="chart">
              <polar-area
                class="content-chart"
                :data="polarData"
                :options="{responsive: true, maintainAspectRatio: false}"
              ></polar-area>
            </div>
            <div class="info-chart">
              <div class="title"><strong>1,547</strong> <small>Issues</small></div>
              <div class="small">8 issues are unassigned</div>
            </div>
          </card>
        </div>
      </div>

      <div class="row mb-lg-4">
        <div class="col-lg-6 map-col mb-4 mb-lg-0">
          <card :indents="0" class="mb-0" :full="'yes'">
            <google-maps></google-maps>
          </card>
        </div>

        <div class="col-lg-6">
          <card class="mb-lg-0">
            <bar-chart
              :data="dataChart"
              :options="{responsive: true, maintainAspectRatio: false, tooltips: false}"
              class="charts"
            ></bar-chart>
          </card>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <card :title="'Users'" :class="'mb-0'">
            <v-list>
              <v-list-tile
                two-line
                v-for="item in messages"
                :key="item.avatar"
                class="list-message"
              >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="h3-user">{{item.from}}</v-list-tile-title>
                  <v-list-tile-sub-title class="content-user">{{item.subject}} - {{item.content}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </card>
        </div>

        <div class="col-lg-6">
          <card :title="'To do list'" :class="'mb-0'">
            <v-list
            >
              <v-list-tile
                class="list-user"
                v-for="folder in folders"
                :key="folder.icon"
              >
                <v-icon
                  class="icon-logo"
                 >
                  {{folder.icon}}
                  <v-badge right v-if="folder.badge" :color="'danger'" :position="'top-right'">{{folder.badge}}</v-badge>
                </v-icon>
                <v-list-tile-content
                  class="list-content-icon"
                >
                  <h4 class="icon-h4">{{folder.name}}</h4>
                  <p><i>{{folder.updated}}</i></p>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </card>
        </div>
      </div>
    </div>
</template>

<script>
import card from '../card/card'
import badge from '../barge/barge'
import pei from '../chart/pie'
import doughnut from '../chart/doughnut'
import polarArea from '../chart/polarArea'
import bar from '../chart/bar'
import googleMaps from '../maps/maps'
export default {
  name: 'widgets',
  data: () => ({
    dataChart: {
      labels: [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
      ],
      datasets: [
        {
          data: [59, 80, 81, 56, 55, 40],
          label: 'Angular JS',
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: '#FFA1B5',
          borderColor: '#FF809B'
        },
        {
          data: [48, 40, 19, 86, 27, 90],
          label: 'React JS',
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: '#84C5F1',
          borderColor: '#4AABED'
        }
      ]
    },
    pieData: {
      labels: null,
      datasets: [{
        data: [300, 500, 100],
        tooltips: false,
        backgroundColor: [
          '#778391',
          '#5dade0',
          '#3c4e62'
        ]
      }]
    },
    DoughnutData: {
      labels: null,
      datasets: [{
        data: [350, 450, 100],
        tooltips: false,
        backgroundColor: [
          '#778391',
          '#ff8c00',
          '#3c4e62'
        ]
      }]
    },
    polarData: {
      labels: null,
      datasets: [{
        data: [300, 400, 500],
        tooltips: false,
        backgroundColor: [
          '#778391',
          '#dc143c',
          '#3c4e62'
        ]
      }]
    },
    messages: [
      {
        from: 'Nancy',
        subject: 'HTML',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        avatar: '/content/avatar-4.jpg'
      },
      {
        from: 'Mary',
        subject: 'Css',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: '/content/avatar-3.jpg'
      },
      {
        from: 'Bobby',
        subject: 'Angular 2',
        content: 'It is a long established fact that a reader will be distracted by the readable content',
        avatar: '/content/avatar-2.jpg'
      },
      {
        from: 'Roma',
        subject: 'Type Script',
        content: 'There are many variations of passages of',
        avatar: '/content/avatar-1.jpg'
      },
      {
        from: 'Amanda',
        subject: 'PHP',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: '/content/avatar-5.jpg'
      },
      {
        from: 'Tom',
        subject: 'Sql',
        content: 'There are many variations of passages of',
        avatar: '/content/avatar-6.jpg'
      }
    ],
    folders: [
      {
        icon: 'android',
        badge: false,
        name: 'Android app',
        updated: 'March 21, 2017'
      },
      {
        icon: 'update',
        badge: false,
        name: 'Update plugins',
        updated: 'March 19, 2017'
      },
      {
        icon: 'bug_report',
        badge: false,
        name: 'Fix bugs',
        updated: 'March 22, 2017'
      },
      {
        icon: 'unarchive',
        badge: false,
        name: 'Create app design',
        updated: 'March 25, 2017'
      },
      {
        icon: 'content_copy',
        badge: 8,
        name: 'Create widgets',
        updated: 'March 16, 2017'
      },
      {
        icon: 'folder_open',
        badge: false,
        name: 'Documentation',
        updated: 'March 28, 2017'
      }
    ]
  }),
  components: {
    card,
    badge,
    pei,
    doughnut,
    'polar-area': polarArea,
    'bar-chart': bar,
    'google-maps': googleMaps
  }
}
</script>

<style scoped lang="scss">
  .title {
    font-size: 2rem !important;
    line-height: 1 !important;
    margin: 0 0 .5rem !important;
  }
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
      font-size: 1rem !important;
      color: white;
    }
    small {
      color: white;
    }
    .v-icon {
      color: rgba(255,255,255,.2);
      font-size: 60px;
      height: auto;
      position: absolute;
      right: 1.5714286rem;
      top: 1.5714286rem;
      width: auto;
    }
  }
  .bg-no {
    .title {
      color: black;
    }
    .count {
      color: black;
    }
    small {
       color: black;
    }
  }
  .list-user {
    display: flex;
    align-items: center;
    height: 72px;
  }
  .h3-user {
    font-size: inherit;
    font-weight: 700;
    line-height: 1.3;
    overflow: hidden;
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
  }
  .content-user {
    font-size: 14px;
    font-style: italic;
  }
  .list-content-icon {
    padding-left: 16px;
    p {
      margin: 0;
    }
  }
  .icon-h4 {
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-weight: 700;
    line-height: 1.3;
    overflow: hidden;
  }
  .charts {
    width: 100%;
    height: 245px;
    display: block;
  }
  .chart {
    display: table-cell;
  }
  .content-chart {
    width: 80px;
    height: 80px;
  }
  .card-content {
    display: flex;
    align-items: center;
  }
  .info-chart {
    display: table-cell;
    vertical-align: middle;
  }
  .chart {
    display: table-cell;
  }
  .content-chart {
    width: 80px;
    height: 80px;
  }
  .card-content {
    display: flex;
    align-items: center;
  }
  .info-chart {
    display: table-cell;
    vertical-align: middle;
  }
  .icon-logo {
    font-size: 40px;
    color: black;
  }
  .list-message {
    height: 72px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
