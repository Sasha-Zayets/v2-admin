<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card>
          <bars
            :chart-data="datacollection"
            :options="{responsive: true, maintainAspectRatio: false}"
          ></bars>
        </card>
      </div>
      <div class="col-lg-6">
        <card>
          <div class="table-responsive">
            <table class="table table-bordered">
              <tr>
                <th v-for="(label, index) of barChartLabels" :key="index">{{label}}</th>
              </tr>
              <tr v-for="(d, index) of dataNumber" :key="index">
                <td v-for="(label, index) of barChartLabels" :key="index">{{d && d.data[index]}}</td>
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
import bars from '../../chart/reactiveBar'
export default {
  name: 'lineCharts',
  components: {
    card,
    bars
  },
  data: () => ({
    barChartLabels: [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012'
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
            backgroundColor: '#FFA1B5',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Series B',
            backgroundColor: '#86C7F3',
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
