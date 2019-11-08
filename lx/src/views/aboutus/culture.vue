<template>
    <div class="single">
        <!-- 主题 -->
       <div class="subchannel_main">
           <div class="subchannel">
               <ul class="subchannellist">
                   <li class="depth1" id="current">
                       <!-- <a href="/culture">企业文化</a> -->
                       <router-link to="culture" >企业文化</router-link>
                    </li>
                    <li class="depth1">
                        <!-- <a href="/honor">资质荣誉</a> -->
                        <router-link to="honor">资质荣誉</router-link>
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
            </a>&nbsp;&gt;&gt;&nbsp;
            <a href="/aboutus.html" target="_self">
            关于我们
            </a>&nbsp;&gt;&gt;&nbsp;
            <a href="/culture.html" target="_self">
            企业文化
            </a>
            </div>
            <h2>
                <img src="../../assets/titleleftbg.png" align="absmiddle">
                企业文化
                <img src="../../assets/titlerightbg.png" align="absmiddle">
            </h2>
    </div>
    <div class="right_body">
        <div class="ChannelContent">
            客满意年虎虎生威 口号是： 内外都满意上下都满意 对顾客 更美味 更快捷 更亲切 更干净 yes! 对家人 更及时 更主动 更专业 更亲爱 yes! 
            2011年主题是： 品质年， 一起给力， let’s go 口号是： 翼的品质我负责， 我的品质您做主 2011年品质是： 服务品质： 干净整洁有礼貌，
            微笑问候速度快，走路快，说话快， 操作快，反应快，翼的天使就是快! 出品品质： 速度快、温度高、客人桌上剩得少，不偷工序不减料， 干净整洁浪费少！
             厅面卫生品质： 洗手间，无异味，玻璃窗，亮晶晶，台布沙发没污渍， 餐具桌椅放得心！ 后厨卫生品质： 地沟明，灶台亮，物品规范整齐放，衣服干净指发短， 
             食品加盖异物光！ 团队品质： 吃得苦，耐得烦，快乐相助不畏难；争第一，树标杆， 突破新高霸得蛮！霸得蛮！ 费用品质： 水电费，很重要，规范开关日抄表；
             常培训，多关心， 精兵强将人力省。精打细算少花钱，日积月累当好家！当好家！ 目标品质： 营收高，费用少，综合毛利控制好；会员多，售卡忙，<br>
                <br>
                顾客满意笑满堂！笑满堂！<br>
                <br>
                后勤财务品质： 预算精，决算准，事前提醒细又频；事中管，事后核， 目标达成一家亲！一家亲！ 后勤采购品质： 货品全，到位快，配合及时人人爱；价格低，品质高， 成本坚决不能超！不能超！ 后勤工程品质： 检查多，维修少，设施设备运转好；技术高，更换少， 处理及时花费少！花费少！ 后勤市场设计品质： 活动多，内容鲜，全部赞助不花钱；设计新，按点到， 按质按量效率高！效率高！ 2012年的主题是： 标准年 口号是： 工作流程化，品质标准化 服务理念 全心全意为中国的城市客厅服务终身。 不仅满足城市生活的需要，更要创造城市生活的美好风尚。友爱互动、学习成长、激情创造、团队荣光。<br>
                <br>
                中西融通、人文创新、优良复制、连锁至胜。眼到，身到，语到，心到。我们的用心，一定要让顾客收到。<br>
                <br>
                专业、专注、专心、专意。我们的品质，一定要征服顾客的心。 立即反应，马上行动！认真、快、坚守承诺！保证完成任务，绝不找借口！<br>
                <br>
                天使在细节里，魔鬼也在细节里。<br>
                <br>
                重视顾客投诉、满足顾客要求、创造顾客需求、赢得顾客忠诚。坚持品质生活唯美精神；讲究中西文化和谐融通；我们的顾客是家人，用心呵护；我们的伙伴是兄妹，共同成长；我们追求感恩付出、快乐分享。 编辑本段发展<br>
                <br>
                xxxx，正以她天赋的<br>
                <br>
                品牌个性、深厚的人文气质、精湛的出品和优质的服务，成为都市时尚生活的风向标。
        </div>
    </div>
    <div class="right_bottom"></div>
</div>



</div>


</template>
<script>
export default {
    
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
/*视频列表*/
.videolist{ margin-top:5px; }
.videolist li { width:382px; float:left; margin-right:15px; text-align:center; overflow:hidden;}
.videolist li img { border:1px solid #E1E1E1; width:100%; }
.videolist li a { white-space:nowrap; line-height:28px;}
</style>
