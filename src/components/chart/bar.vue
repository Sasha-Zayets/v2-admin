<script>
import VueChartJs from 'vue-chartjs'
export default {
  props: ['data', 'options'],
  extends: VueChartJs.Bar,
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
