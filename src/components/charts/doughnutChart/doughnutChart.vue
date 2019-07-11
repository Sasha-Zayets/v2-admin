<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card>
          <doughnut
            :data="DoughnutData"
            :options="{responsive: true, maintainAspectRatio: false}"
          ></doughnut>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../../card/card'
import Doughnut from '../../chart/doughnut'
export default {
  name: 'doughnutChart',
  data: () => ({
    DoughnutData: {
      labels: [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
      ],
      datasets: [{
        data: [350, 450, 100],
        backgroundColor: [
          '#778391',
          '#ff8c00',
          '#3c4e62'
        ]
      }]
    }
  }),
  components: {
    Doughnut,
    card
  }
}
</script>

<style scoped>

</style>
