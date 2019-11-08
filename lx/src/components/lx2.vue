<template>
    <div>
        <p>我的博客名：{{this.name}}</p>
        <!-- <p>我的博客名：{{this.$route.query.name}}</p> -->
    </div>
</template>
 
<script>
export default {
  data() {
    return {
       // 取出传入的参数
       name:"",
    };
  },
  created() {},
  methods: {

},
    mounted(){
        this.name = this.$route.params.name ;        
        console.log(this.name)
    }
}
</script>
 
<style>
 
</style>