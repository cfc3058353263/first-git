<template>
    <div class="picture">
        <div class="subchannel_main">
            <div class="subchannel">
                <ul class="subchannellist">
                    <li class="depth1">
                        <!-- <a href="/hbtd.html">烘焙甜点</a> -->
                        <router-link to="hbtd">烘焙甜点</router-link>
                    </li>
                    <li class="depth1" >
                        <!-- <a href="/yskf.html">意式咖啡</a> -->
                        <router-link to="yskf">意式咖啡</router-link>
                    </li><li class="depth1" >
                        <!-- <a href="/qsyp.html">清爽饮品</a> -->
                        <router-link to="qsyp">清爽饮品</router-link>
                    </li>
                    <li class="depth1" id="current">
                        <!-- <a href="/swtc.html">商务套餐</a> -->
                        <router-link to="swtc" >商务套餐</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--右侧区域 开始-->
        <div id="right">
            <div class="right_title1 ">
                <span class="more">
                    <!-- <a href="/hbtd.html" target="_blank">更多...</a> -->
                    <router-link to="javascript:;">更多...</router-link>
                 </span>
                <h2>
                     <img src="../../assets/titleleftbg.png" align="absmiddle">
                     <a href="/hbtd.html">
                     商务套餐
                     </a>
                     <img src="../../assets/titleleftbg.png" align="absmiddle">
                </h2>
            </div>
        <div class="right_body1">
                <ul class="gridlist">
                    <!--循环开始-->
                    <li class="animated delay1 fadeInUp" v-for="(item,index) of packages" :key="index">
                        <router-link :to="item.to">
                        <img :src="require(`../../../public/Upload/${item.img}`)" :title="item.title">
                        </router-link>
                        <router-link :to="item.to">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
        </div>
    <div class="right_bottom1"></div>
    </div><!--右侧区域 结束-->
    <div class="clear"></div>
</div>
</template>

<script>
export default {
        data(){
            return{
          packages:[
                {img:"package8.jpg",title:"商务套餐8",to:"javascript:;"},
                {img:"package7.jpg",title:"商务套餐7",to:"javascript:;"},
                {img:"package6.jpg",title:"商务套餐6",to:"javascript:;"},
                {img:"package5.jpg",title:"商务套餐5",to:"javascript:;"},
                {img:"package4.jpg",title:"商务套餐4",to:"javascript:;"},
                {img:"package3.jpg",title:"商务套餐3",to:"javascript:;"},
                {img:"package2.jpg",title:"商务套餐2",to:"javascript:;"},
                {img:"package1.jpg",title:"商务套餐1",to:"javascript:;"},
            ]
            }
        }
}
</script>

<style scoped>
.subchannel_main{ margin:10px 0;}
.subchannellist { text-align:center;}
.subchannellist li { display:inline;line-height:36px;  }
.subchannellist li a {background:#974305; padding:5px 35px; margin-right:10px; color:#FFF; border:0px solid #974305;}
.subchannellist li a:hover { background:#351111;  color:#FFF;text-decoration:none; }
.subchannellist #current a {  font-weight:bold; background:#351111; color:#FFF;}

/*橱窗列表*/
.gridlist{ margin-top:5px; }
.gridlist li { float:left; padding:4px 0;margin-bottom:10px; margin-right:15px; text-align:center; overflow:hidden; display:inline /*解决ie6 双边距bug*/;
text-overflow:ellipsis; white-space:nowrap;}
.gridlist li img { border:1px solid #D6D6D6; width:282px;}
.gridlist li a {display:block;}
.gridlist li .InfoTitle{white-space:nowrap; line-height:28px;text-overflow:ellipsis;overflow:hidden;width:282px;}
.gridlist li a:hover img { border:1px solid #000; }
</style>
