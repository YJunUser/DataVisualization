<template>
  <div id="myChart" :style="{width: '100%', height: '700px'}" />
</template>

<script>
import { getYearAvage } from '@/api/table'

export default {
  name: 'Index',
  data() {
    return {
      avage: []
    }
  },
  mounted() {
    getYearAvage().then(res => {
      this.avage = res
      this.drawline()
    })
  },
  methods: {
    drawline() {
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      const avg1 = [this.avage[0], this.avage[1]]
      const avg2 = [this.avage[2], this.avage[3]]
      const option = {
        title: {
          text: '深市与泸市平均成交量和成交额对比',
          subtext: '数据来自文件'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['深市', '泸市']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['成交量', '成交额']
        },
        series: [
          {
            name: '深市',
            type: 'bar',
            data: avg1
          },
          {
            name: '泸市',
            type: 'bar',
            data: avg2
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
