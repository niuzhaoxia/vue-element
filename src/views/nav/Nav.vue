<template>
  <div class="nav">
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.$store.state.editableTabs
      let activeName = this.$store.state.editableTabsValue
      console.log(targetName)
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      // this.$store.commit('changeTabValue', activeName)
      this.$store.commit('removeTabItem', targetName)
      // this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
  computed: {
    editableTabs() {
      return this.$store.state.editableTabs
    },
    editableTabsValue: {
      get() {
        return this.$store.state.editableTabsValue
      },
      set() {
        // this.$store.commit('changeTabValue', activeName)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  height: 60px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 50px;
}
.el-tabs, .is-top{
  height:100%;
  line-height: 100%;
}
.el-main {
  line-height: 0;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav {
  background-color: whitesmoke !important;
}
</style>