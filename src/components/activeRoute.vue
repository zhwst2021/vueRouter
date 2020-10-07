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
      this.route = this.$route.params.id;
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 只能检测到复用组件【参数不同的跳转】
    console.log("beforeRouteUpdate", to, from, next);
  }
};
</script>
