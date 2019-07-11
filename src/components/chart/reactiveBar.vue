<script>
import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  props: ['options'],
  mixins: [reactiveProp],
  extends: Bar,
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
