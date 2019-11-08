<template>
    <div class="single">
        <!-- 主题 -->
       <div class="subchannel_main">
           <div class="subchannel">
               <ul class="subchannellist">
                   <li class="depth1" >
                       <!-- <a href="/culture">企业文化</a> -->
                       <router-link to="culture" >企业文化</router-link>
                    </li>
                    <li class="depth1">
                        <!-- <a href="/honor">资质荣誉</a> -->
                        <router-link to="honor" id="current">资质荣誉</router-link>
                    </li>
                    <li class="depth1">
                        <!-- <a href="/kfsp">咖啡视频</a> -->
                        <router-link to="kfsp">咖啡视频</router-link>
                    </li>
                </ul>
            </div>
        </div>


<div id="right">
    <div class="right_title">
        <div id="location">
            <b>当前位置：</b>
            <a href="/" target="_self">
            网站首页
            </a>
            &nbsp;&gt;&gt;&nbsp;
            <a href="/aboutus.html" target="_self">
            关于我们
            </a>
            &nbsp;&gt;&gt;&nbsp;
            <a href="/honor.html" target="_self">
            资质荣誉
            </a>
        </div>
            <h2>
                <img src="../../assets/titleleftbg.png" align="absmiddle">
                资质荣誉
                <img src="../../assets/titlerightbg.png" align="absmiddle">
            </h2>
    </div>
        <div class="right_body">
            <ul class="gridlist">
                <li class="animated delay1 fadeInUp" v-for="(item,index) of certificate" :key="index">
                    <router-link :to="item.to">
                        <img :src="require(`../../../public/Upload/${item.img}`)" >
                    </router-link>
                    <br>
                    <router-link :to="item.title" target="_blank">
                        {{item.title}}
                    </router-link>
                </li>

            </ul>
            <div class="page"></div>
        </div>
        <div class="right_bottom"></div>
</div>


</div>


</template>
<script>
export default {
    data(){
        return{
            certificate:[
                {img:"certificate1.jpg",to:"javascript:;",title:"资质荣誉4"},
                {img:"certificate2.jpg",to:"javascript:;",title:"资质荣誉3"},
                {img:"certificate3.jpg",to:"javascript:;",title:"资质荣誉2"},
                {img:"certificate1.jpg",to:"javascript:;",title:"资质荣誉1"},
            ]
        }
    }
}
</script>
<style scoped>
/*子频道列表*/
.subchannel_main{ margin:10px 0;}
.subchannellist { text-align:center;}
.subchannellist li { display:inline;line-height:36px;  }
.subchannellist li a {background:#974305; padding:5px 35px; margin-right:10px; color:#FFF; border:0px solid #974305;}
.subchannellist li a:hover { background:#351111;  color:#FFF;text-decoration:none; }
.subchannellist #current a {  font-weight:bold; background:#351111; color:#FFF;}
.subchannellist .depth1{ font-size:16px; font-weight:bold; }
.subchannellist .depth2{ font-size:14px; text-indent:1.5em; background:none; }
.subchannellist .depth2 a{ border:none;}
.subchannellist .depth3{ font-size:14px; text-indent:3em}
.subchannellist .depth4{ font-size:14px; text-indent:4.5em}
.subchannellist .depth5{ font-size:14px; text-indent:6em}
.subchannellist .depth6{ font-size:14px; text-indent:7.5em}
/*橱窗列表*/
.gridlist{ margin-top:5px; }
.gridlist li { float:left; padding:4px 0;margin-bottom:10px; margin-right:15px; text-align:center; overflow:hidden; display:inline /*解决ie6 双边距bug*/;
text-overflow:ellipsis; white-space:nowrap;}
.gridlist li img { border:1px solid #D6D6D6; width:282px;}
.gridlist li a {display:block;}
.gridlist li .InfoTitle{white-space:nowrap; line-height:28px;text-overflow:ellipsis;overflow:hidden;width:282px;}
.gridlist li a:hover img { border:1px solid #000; }
/*视频列表*/
.videolist{ margin-top:5px; }
.videolist li { width:382px; float:left; margin-right:15px; text-align:center; overflow:hidden;}
.videolist li img { border:1px solid #E1E1E1; width:100%; }
.videolist li a { white-space:nowrap; line-height:28px;}
</style>
