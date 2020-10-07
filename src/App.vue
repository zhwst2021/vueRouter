<template>
  <div class="base">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/my">My</router-link> | 
    <router-view name="base" />
  </div>
  <div class="action">
    <input v-model="id" placeholder="请输入要跳转的路由参数"/>{{ id }}
    <input type="button" value="动态跳转" @click="actionClick" />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    actionClick() {
      // 动态路由设置，在点击事件中获取参数并传入路由
      // this.$router.push直接跳转
      this.$router.push("/activeRoute/:" + this.id);
      // this.$router.replace();
      // this.$router.go();
    }
  }
};
</script>
<style>
.base {
  margin-top: 20px;
  margin-left: 20px;
  height: 200px;
  width: 800px;
  background-color: darkcyan;
}
.action {
  margin-top: 20px;
  margin-left: 20px;
  height: 200px;
  width: 800px;
  background-color:darkgray;
}
</style>
