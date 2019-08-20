<template>
  <div>
    <div></div>
    <div ref="main" class="echartBox"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import option from './options.js'

export default {
  mounted() {
    let myChart = echarts.init(this.$refs.main);
    myChart.setOption(option);
  }
};
</script>

<style lang="less" scoped>
.echartBox {
  height: 300px;
}

</style>