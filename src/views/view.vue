<template>
  <div class="home">
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Nav></Nav>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './home/aside'
import Nav from './nav/Nav'
export default {
  data() {
    return {};
  },
  components: {
    Aside, Nav
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .home > .el-container {
    height: 100%;
  }

</style>

