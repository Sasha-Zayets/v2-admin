<template>
    <div>
      <card>
        <div class="row">
          <div class="col-lg-6">
            <lines
              v-if="show"
              :data="chartData"
              :options="{responsive: true, maintainAspectRatio: false}"
            ></lines>
            <bar
              v-else
              :data="chartData"
              :options="{responsive: true, maintainAspectRatio: false}"
            ></bar>
          </div>
          <div class="col-lg-6">
            <pie
              v-if="show"
              :data="pieData"
              :options="{responsive: true, maintainAspectRatio: false}"
            ></pie>
            <doughnut
              v-else
              :data="pieData"
              :options="{responsive: true, maintainAspectRatio: false}"
            ></doughnut>
          </div>
        </div>
      </card>

      <div class="text-center">
        <v-btn color="accent" @click="randomizeType()">Update</v-btn>
      </div>
    </div>
</template>

<script>
import card from '../../card/card'
import lines from '../../chart/line'
import bar from '../../chart/bar'
import pie from '../../chart/pie'
import doughnut from '../../chart/doughnut'
export default {
  name: 'dynamicChart',
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
    pieData: {
      labels: [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
      ],
      datasets: [{
        data: [300, 500, 100],
        backgroundColor: [
          '#FFA1B5',
          '#86C7F3',
          '#FFE29A'
        ]
      }]
    },
    show: true
  }),
  methods: {
    randomizeType () {
      this.show = !this.show
    }
  },
  components: {
    card,
    lines,
    pie,
    bar,
    doughnut
  }
}
</script>

<style scoped>

</style>
