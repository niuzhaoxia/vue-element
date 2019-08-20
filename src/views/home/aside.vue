<template>
  <el-row class="tac">
    <el-col :span="24">
      <div class="elMenuBox" @click="addTab">
        <el-menu class="el-menu-vertical-demo" background-color="#545c64">
          <router-link to="/home">
            <el-menu-item index="/home">
              <i class="el-icon-s-custom"></i>
              <span slot="title">个人评估</span>
            </el-menu-item>
          </router-link>

          <router-link to="/todo">
            <el-menu-item index="/todo">
              <i class="el-icon-menu"></i>
              <span slot="title">todo</span>
            </el-menu-item>
          </router-link>

          <router-link to="/notebook">
            <el-menu-item index="/notebook">
              <i class="el-icon-document"></i>
              <span slot="title">笔记</span>
            </el-menu-item>
          </router-link>

          <router-link to="/timeLine">
            <el-menu-item index="/timeLine">
              <i class="el-icon-setting"></i>
              <span slot="title">时间</span>
            </el-menu-item>
          </router-link>

          <router-link to="/canvas">
            <el-menu-item index="/canvas">
              <i class="el-icon-setting"></i>
              <span slot="title">画布</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    addTab(e) {
      let tabsLength = this.$store.state.editableTabs.length;
      e.target.isShowTab = true;
      console.log(e);
      let option = { title: e.target.innerText, name: `${tabsLength}` };
      this.$store.commit("addTabItem", option);
    }
  }
};
</script>

<style lang="less" scoped>
.tac,
.el-col,
.el-menu,
.elMenuBox {
  height: 100%;
}
.el-menu-item-group {
  overflow: hidden;
}
.el-menu li {
  text-align: left;
}
.el-menu .is-active {
  color: #332;
  i {
    color: #999;
  }
}
.el-menu a.router-link-active {
  i,
  span {
    color: orange;
  }
}
</style>