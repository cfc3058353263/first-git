<template>
<div id="right">
    <div class="right_title">
        <h2>
            <img src="../assets/titleleftbg.png" align="absmiddle">
            联系我们
            <img src="../assets/titleleftbg.png" align="absmiddle">
        </h2>
    </div>
    <div class="right_body">
        <div class="ChannelContent">
            <div id="dituContent" style="width: 100%; height: 450px;">
                <!-- 百度地图 开始-->
                <div id="fli" class="fli"></div>
                <!-- 百度地图 结束-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
mounted(){
         /* 百度地图样式 */
      var map = new BMap.Map('fli',{enableMapClick:true});    // 创建Map实例
      map.centerAndZoom(new BMap.Point(120.377161,36.090603), 20);  // 初始化地图,设置中心点坐标和地图级别
    // 120.377161,36.090603
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("青岛");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  },
}
</script>

<style scoped>
#right{ float: none;margin: 0 auto; }
/* 百度地图 */
.fli{ width: 100%;height: 100%;/* overflow: hidden; */margin: 0;}

</style>