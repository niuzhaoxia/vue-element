<template>
  <div>
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        
        value1: ''
      };
    }
};
</script>

<style lang="scss" scoped>
</style>