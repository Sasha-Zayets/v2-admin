<script>
import VueChartJs from 'vue-chartjs'
export default {
  props: ['data', 'options'],
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
