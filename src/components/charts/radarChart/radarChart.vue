<template>
    <div>
      <div class="row">
        <div class="col-lg-6">
          <card>
            <radar
              :data="chartRadar"
              :options="{responsive: true, maintainAspectRatio: false}"
            ></radar>
          </card>
        </div>
      </div>
    </div>
</template>

<script>
import card from '../../card/card'
import radar from '../../chart/radar'
export default {
  name: 'radarChart',
  data: () => ({
    chartRadar: {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [
        {
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
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
          label: 'Series B',
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
    }
  }),
  components: {
    card,
    radar
  }
}
</script>

<style scoped>

</style>
