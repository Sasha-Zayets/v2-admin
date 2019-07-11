<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card>
          <pie
            :data="pieData"
            :options="{responsive: true, maintainAspectRatio: false}"
          ></pie>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../../card/card'
import pie from '../../chart/pie'
export default {
  name: 'pieChart',
  data: () => ({
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
    }
  }),
  components: {
    card,
    pie
  }
}
</script>

<style scoped>

</style>
