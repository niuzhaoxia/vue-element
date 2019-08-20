<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="title clearfix">
        <span>登录系统</span>
        <button class="iconfont icon-zhongyingwenqiehuan"></button>
        <ul class="lang_list" @click="selectLang($event)">
          <li v-for="(item, index) in langList" :key="index">{{item}}</li>
        </ul>
      </div>
      <ul class="form_list">
        <li>
          <span class="el-icon-s-custom"></span>
          <input type="text" class="user_name" v-model="userName" />
        </li>
        <li class="clearfix">
          <span class="el-icon-lock"></span>
          <input ref="password" type="text" class="password" v-model="password" />
          <span :class="eye ? 'el-icon-view' : 'iconfont icon-yanjing'" @click="change"></span>
          <!-- <span class="iconfont icon-yanjing"></span> -->
        </li>
        <li>
          <button>{{$t('login.title')}}</button>
        </li>
        <li class="clearfix">
          <span>user: 111 password: 111</span>
          <button>第三方登录</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                eye: true,
                userName: '111',
                password: '111',
                langList: ['中文', 'English']
            }
        },
        methods: {
           change() {
               this.eye = !this.eye
               if(this.eye) {
                   this.$refs.password.type = 'text'
                   return
               }
               this.$refs.password.type = 'password'
           },
           selectLang(e) {
               let index = this.langList.indexOf(e.target.innerText)
               let langAry = ['zh-CN', 'en']
               this.$i18n.locale = langAry[index]
               this.$store.dispatch('setLanguage', langAry[index])   
           }
        },
        computed: {

        }
    }
</script>

<style lang="less" scoped>
.login_bg {
  height: 100%;
  background-color: rgb(37, 44, 58);
  color: white;
  overflow: hidden;
  .login_box {
    width: 500px;
    margin: 100px auto;
    .title {
      position: relative;
      font-size: 20px;
      font-weight: 700;
      span {
        float: left;
        width: 480px;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      button {
        float: left;
        width: 20px;
        height: 20px;
        margin: 15px 0;
        border: none;
        border-radius: 5px;
      }
      .lang_list {
        z-index: 99;
        position: absolute;
        bottom: -55px;
        right: 0;
        background-color: white;
        border-radius: 4px;
        color: black;
        font-size: 16px;
        font-weight: 400;
        li {
          padding: 5px 10px;
        }
      }
    }
    .form_list {
      li {
        height: 50px;
        font-size: 22px;
        margin-top: 20px;
        overflow: hidden;
        .iconfont {
          float: right;
          font-size: 22px;
        }
      }
      li:nth-child(1),
      li:nth-child(2) {
        background-color: rgb(39, 44, 54);
        border: 1px solid rgba(255, 254, 254, 0.603);
        border-radius: 4px;
        input {
          border: none;
          background-color: rgba(255, 255, 255, 0);
          font-size: 14px;
          color: white;
        }
        span {
          width: 50px;
          height: 50px;
          line-height: 30px;
          text-align: center;
          padding: 10px;
          box-sizing: border-box;
        }
        .user_name {
          width: 448px;
        }
        .password {
          width: 398px;
        }
      }
      li:nth-child(3) {
        button {
          width: 100%;
        }
      }
      li:nth-child(4) {
        span {
          font-size: 14px;
        }
        button {
          float: right;
          width: 170px;
        }
      }
      li:nth-child(3),
      li:nth-child(4) {
        button {
          border: none;
          background-color: rgb(7, 92, 161);
          color: whitesmoke;
          border-radius: 4px;
          font-size: 16px;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>