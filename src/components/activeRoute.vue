<template>
  <div class="home">
    <h1>动态路由{{ route }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      route: ""
    };
  },
  watch: {
    $route(to, from) {
      // to和from监听来回变化的路由对象route
      console.log("change", to, from);
      this.route = to.params.id;
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 只能检测到复用组件【参数不同的跳转】
    this.route = to.params.id;
    console.log("beforeRouteUpdate", to, from, next);
  },
  beforeRouteEnter(to, from, next) {
      console.log("----200000000.1----")
      console.log(to, from)
      next(vm=>{
          console.log('vm,!!!!!!!!!',vm)
      });
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
};
</script>
