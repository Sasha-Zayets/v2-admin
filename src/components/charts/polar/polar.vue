<template>
    <div>
      <div class="row">
        <div class="col-lg-8">
          <card>
            <polar
              :data="polarData"
              :options="{responsive: true, maintainAspectRatio: false}"
            ></polar>
          </card>
        </div>
      </div>
    </div>
</template>

<script>
import card from '../../card/card'
import polar from '../../chart/polarArea'
export default {
  name: 'polar-body',
  data: () => ({
    polarData: {
      labels: [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
      ],
      datasets: [{
        data: [300, 500, 100, 40, 120],
        backgroundColor: [
          '#FFA1B5',
          '#86C7F3',
          '#FFE29A',
          '#F1F2F4',
          '#93D9D9'
        ],
        borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#E7E9ED',
          '#4BC0C0'
        ]
      }]
    }
  }),
  components: {
    card,
    polar
  }
}
</script>

<style scoped>

</style>
