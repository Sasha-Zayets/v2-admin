<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-xl-3">
        <card :bgColor="'danger'" class="info-card">
          <div class="title text-uppercase">Orders</div>
          <div class="count">2,145</div>
          <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+17%</badge> <small>from previous period</small>
          <v-icon class="icon-card-position">shopping_basket</v-icon>
        </card>
      </div>

      <div class="col-md-6 col-xl-3">
        <card :bgColor="'warning'" class="info-card">
          <div class="title text-uppercase">Revenue</div>
          <div class="count">$ 50,24</div>
          <small>11750</small>
          <v-icon class="icon-card-position">equalizer</v-icon>
        </card>
      </div>

      <div class="col-md-6 col-xl-3">
        <card :bgColor="'info'" class="info-card">
          <div class="title text-uppercase">Products</div>
          <div class="count">2,543</div>
          <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+210</badge>
          <v-icon class="icon-card-position">monetization_on</v-icon>
        </card>
      </div>

      <div class="col-md-6 col-xl-3">
        <card :bgColor="'success'" class="info-card">
          <div class="title text-uppercase">Sold</div>
          <div class="count">1,005</div>
          <badge :customColor="'rgba(255,255,255,0.3)'" :borderRadius="false">+24%</badge>
          <v-icon class="icon-card-position">donut_large</v-icon>
        </card>
      </div>

      <div class="col-lg-8">
        <card title="Audience Overview">
          <lines
            :data="chartData"
            :options="{responsive: true, maintainAspectRatio: false}"
            class="charts"
          ></lines>
        </card>
      </div>

      <div class="col-lg-4">
        <card title="Development">
          <radar-charts
            :data="chartRadar"
            :options="{responsive: true, maintainAspectRatio: false}"
            class="charts"
          ></radar-charts>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <card :title="'Users'">
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
        <card :title="'To do list'">
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
    <card title="Last uploaded files" class="mb-0">
      <file :type="'jpg'" :title="'bulb'" :image="'/content/file-1.jpg'"></file>
      <file :type="'doc'" :title="'resume'"></file>
      <file :type="'jpg'" :title="'main-image'" :image="'/content/file-2.jpg'"></file>
      <file :type="'jpg'" :title="'watch'" :image="'/content/file-3.jpg'"></file>
      <file :type="'jpg'" :title="'camera'" :image="'/content/file-4.jpg'"></file>
      <file :type="'pdf'" :title="'documentation'"></file>
      <file :type="'mp4'" :title="'video-tutorial'"></file>
      <file :type="'jpg'" :title="'best-work'" :image="'/content/file.jpg'"></file>
      <file :type="'jpg'" :title="'smart'" :image="'/content/file-5.jpg'"></file>
      <file :type="'zip'" :title="'theme'"></file>
    </card>
  </div>
</template>

<script>
import card from '../card/card'
import badge from '../barge/barge'
import file from '../file/file'
import chart from '../chart/line'
import radar from '../chart/radar'
export default {
  name: 'dashboard',
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
    },
    chartRadar: {
      labels: [
        'Designing',
        'Coding',
        'Support',
        'Marketing',
        'Sales',
        'Customization',
        'Updating'
      ],
      datasets: [
        {
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Plugins',
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
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Widgets',
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: 'rgba(255,140,0,0.2)',
          borderColor: '#ff8c00',
          pointBackgroundColor: '#ff8c00',
          pointBorderColor: '#FF630B',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#000'
        }
      ]
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
    file,
    'lines': chart,
    'radar-charts': radar
  }
}
</script>

<style scoped lang="scss">
.icon-card-position {
  color: rgba(255,255,255,.2) !important;
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
  }
  .title {
    font-size: 1rem !important;
  }
}
.list-message {
  height: 72px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
.icon-logo {
  font-size: 40px;
  color: black;
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
    height: 339px;
  }
</style>
