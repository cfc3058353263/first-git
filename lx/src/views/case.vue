<template>
<div class="picture">
        <!--右侧区域 开始-->
        <div id="right">
            <div class="right_title">
                <!--当前位置 开始-->
                <div id="location">
                    <b>当前位置：</b>
                    <a href="/" target="_self">
                    网站首页
                    </a>
                    &nbsp;&gt;&gt;&nbsp;
                    <a href="/case.html" target="_self">成功案例</a>
                </div>
                <!--当前位置 结束-->
                <h2>
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                    成功案例
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                </h2>
            </div>
        <div class="right_body">
            <ul class="gridlist">
                <!--循环开始-->
                 <li class="animated delay1 fadeInUp" v-for="(item,index) of cases" :key="index">
                        <router-link :to="item.to">
                        <img :src="require(`../../public/Upload/${item.src}`)" :title="item.title">
                        </router-link>
                        <br>
                        <router-link :to="item.to">
                            {{item.title}}
                        </router-link>
                    </li>
                <!-- <li class="animated delay1 fadeInUp">
                    <a href="/case/226.html" target="_blank">
                    <img src="/Upload/1494060198.jpg" title="成功案例八" alt="成功案例八">
                    </a>
                    <br><a href="/case/226.html" target="_blank" title="成功案例八">
                    成功案例八
                    </a>
                </li>
                <li class="animated delay2 fadeInUp"><a href="/case/225.html" target="_blank"><img src="/Upload/1494060191.jpg" title="成功案例七" alt="成功案例七"></a><br><a href="/case/225.html" target="_blank" title="成功案例七">成功案例七</a></li><li class="animated delay3 fadeInUp"><a href="/case/224.html" target="_blank"><img src="/Upload/1494060182.jpg" title="成功案例六" alt="成功案例六"></a><br><a href="/case/224.html" target="_blank" title="成功案例六">成功案例六</a></li><li class="animated delay4 fadeInUp"><a href="/case/223.html" target="_blank"><img src="/Upload/1494060173.jpg" title="成功案例五" alt="成功案例五"></a><br><a href="/case/223.html" target="_blank" title="成功案例五">成功案例五</a></li><li class="animated delay5 fadeInUp"><a href="/case/222.html" target="_blank"><img src="/Upload/1494060166.jpg" title="成功案例四" alt="成功案例四"></a><br><a href="/case/222.html" target="_blank" title="成功案例四">成功案例四</a></li><li class="animated delay6 fadeInUp"><a href="/case/221.html" target="_blank"><img src="/Upload/1494060159.jpg" title="成功案例三" alt="成功案例三"></a><br><a href="/case/221.html" target="_blank" title="成功案例三">成功案例三</a></li><li class="animated delay7 fadeInUp"><a href="/case/220.html" target="_blank"><img src="/Upload/1494060149.jpg" title="成功案例二" alt="成功案例二"></a><br><a href="/case/220.html" target="_blank" title="成功案例二">成功案例二</a></li><li class="animated delay8 fadeInUp"><a href="/case/219.html" target="_blank"><img src="/Upload/1494060132.jpg" title="成功案例一" alt="成功案例一"></a><br><a href="/case/219.html" target="_blank" title="成功案例一">成功案例一</a></li>
           -->
            </ul> 
            <div class="page"></div>
        </div><div class="right_bottom"></div>
</div>
<!--右侧区域 结束-->
<!-- 清除浮动 -->
<div class="clear"></div></div>
</template>

<script>
export default {
    data(){
        return{
                       cases:[
                {src:"case1.jpg",n:"n1",to:"javascript:;",target:"_blank",title:"成功案例一"},
                {src:"case2.jpg",n:"n2",to:"javascript:;",target:"_blank",title:"成功案例二"},
                {src:"case3.jpg",n:"n3",to:"javascript:;",target:"_blank",title:"成功案例三"},
                {src:"case4.jpg",n:"n4",to:"javascript:;",target:"_blank",title:"成功案例四"},
                {src:"case5.jpg",n:"n5",to:"javascript:;",target:"_blank",title:"成功案例五"},
                {src:"case6.jpg",n:"n6",to:"javascript:;",target:"_blank",title:"成功案例六"},
                {src:"case7.jpg",n:"n7",to:"javascript:;",target:"_blank",title:"成功案例七"},
                {src:"case8.jpg",n:"n8",to:"javascript:;",target:"_blank",title:"成功案例八"},
            ], 
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
