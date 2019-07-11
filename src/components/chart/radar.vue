<script>
import VueChartJs from 'vue-chartjs'
export default {
  props: ['data', 'options'],
  extends: VueChartJs.Radar,
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
