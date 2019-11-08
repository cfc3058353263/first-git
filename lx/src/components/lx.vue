
<template>
    <div>
        <div class="" @click="clickMe">点我跳转</div>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      
    };
  },
  created() {},
  methods: {
     // 点击方法
     clickMe() {
        // path：从pages或views后面开始写(也就是放vue文件的根目录)
        // 大概目录结构如下
        // + api
        // + ...
        // - pages
        //    - before.vue  当前的文件
        //    - after.vue   要跳转过去的文件
        // vue的路由名默认就是文件名
        // query：存放参数（key:value,key:value,...,key:value）
        this.$router.push({path:'lx2',params:{name:'123'}});
     }
  }
};
</script>
 
<style>
 
</style>
