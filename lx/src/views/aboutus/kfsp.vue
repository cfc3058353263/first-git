<template>
    <div class="single">
        <!-- 主题 -->
       <div class="subchannel_main">
           <div class="subchannel">
               <ul class="subchannellist">
                   <li class="depth1">
                       <!-- <a href="/culture">企业文化</a> -->
                       <router-link to="culture" >企业文化</router-link>
                    </li>
                    <li class="depth1">
                        <!-- <a href="/honor">资质荣誉</a> -->
                        <router-link to="honor">资质荣誉</router-link>
                    </li>
                    <li class="depth1">
                        <!-- <a href="/kfsp">咖啡视频</a> -->
                        <router-link to="kfsp" id="current" >咖啡视频</router-link>
                    </li>
                </ul>
            </div>
        </div>

<div id="right">
    <div class="right_title1">
        <!--当前位置 开始-->
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
            <a href="/kfsp.html" target="_self">
            咖啡视频
            </a>
        </div>
            <!--当前位置 结束-->
            <h2>
                <img src="../../assets/titleleftbg.png" align="absmiddle">
                咖啡视频
                <img src="../../assets/titlerightbg.png" align="absmiddle">
            </h2>
    </div>
    <div class="right_body1">
        <ul class="videolist">
            <li v-for="(item,index) of flower" :key="index">
                <router-link to="javascript:;">
                    <img :src="require(`../../../public/Upload/${item.img}`)">
                </router-link>
                <br>
                <router-link to="javascript:;" :title="item.title">{{item.title}}</router-link>

            </li>
                <!--循环结束-->
        </ul>
        <div class="page"></div>
    </div>
        <div class="right_bottom1"></div>
</div>

</div>


</template>
<script>
export default {
    data(){
        return{
            flower:[
                {img:"Flower1.jpg",title:"咖啡拉花6"},
                {img:"Flower2.jpg",title:"咖啡拉花5"},
                {img:"Flower3.jpg",title:"咖啡拉花4"},
                {img:"Flower4.jpg",title:"咖啡拉花3"},
                {img:"Flower5.jpg",title:"咖啡拉花2"},
                {img:"Flower6.jpg",title:"咖啡拉花1"},
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

/*视频列表*/
.videolist{ margin-top:5px; }
.videolist li { width:382px; float:left; margin-right:15px; text-align:center; overflow:hidden;}
.videolist li img { border:1px solid #E1E1E1; width:100%; }
.videolist li a { white-space:nowrap; line-height:28px;}
</style>
