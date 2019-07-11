<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card>
         <lines
            :chart-data="datacollection"
            :options="{responsive: true, maintainAspectRatio: false}"
         ></lines>
        </card>
      </div>
      <div class="col-lg-6">
        <card>
          <div class="table-responsive">
            <table class="table table-bordered">
              <tr>
                <th v-for="(label, index) of lineChartLabels" :key="index">{{label}}</th>
              </tr>
              <tr v-for="(d, index) of dataNumber" :key="index">
                <td v-for="(label, index) of lineChartLabels" :key="index">{{d && d.data[index]}}</td>
              </tr>
            </table>
          </div>
        </card>

        <v-btn color="accent" @click="fillData()">Update</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../../card/card'
import lines from '../../chart/reactiveLine'
export default {
  name: 'lineCharts',
  components: {
    card,
    lines
  },
  data: () => ({
    lineChartLabels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July'
    ],
    datacollection: null,
    dataNumber: null
  }),
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Series A',
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Series B',
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Series C',
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.dataNumber = this.datacollection.datasets
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style scoped>

</style>
