<template>
    <div class="single">
        <!-- 主题 -->
       <div class="subchannel_main">
           <div class="subchannel">
               <ul class="subchannellist">
                   <li class="depth1">
                       <!-- <a href="/culture">企业文化</a> -->
                       <router-link to="culture">企业文化</router-link>
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
                    <a href="/" target="_self">网站首页</a>&nbsp;&gt;&gt;&nbsp;
                    <a href="/aboutus.html" target="_self">
                    关于我们
                    </a>
                </div>
        <h2>
            <img src="../assets/titleleftbg.png" align="absmiddle">
            关于我们
            <img src="../assets/titlerightbg.png" align="absmiddle">
        </h2>
    </div>
        <div class="right_body">
            <div class="ChannelContent">
                关于我们<br>
                                <br>
                                欢迎<br>
                                <br>
                                欢迎来到xx咖啡有限公司我们是一个强大的专业公司提供完整解决中国咖啡市场方案。 从咖啡、咖啡设备和咖啡供应合格的工程服务,我们提供全面优质服务企业,办公室,餐饮,酒店交易。 我们的经验、资源和专业知识,来自全球市场和我们带来新的灵感和最新国际咖啡中国市场的趋势。<br>
                                <br>
                                经验<br>
                                <br>
                                我们在咖啡行业经验丰富,只采购高质量的咖啡品牌,尝试和测试的设备。 我们的建议和专业知识带给我们许多满意的客户,但更重要的是,帮助我们保留这些快乐的忠实客户。<br>
                                <br>
                                咖啡机<br>
                                <br>
                                我们只出售最好的质量商业半自动咖啡机和全自动咖啡机。 我们主要代理的品牌的一流的咖啡机来自意大利。 我们还提供高度竞争的租赁贸易或直接客户优秀的金融解决方案包。 我们可以为任何机器提供备份服务出售,出租或租赁。<br>
                                <br>
                                技术服务<br>
                                <br>
                                我们的高素质服务工程师提供优秀的服务和维修技能。 我们自豪地提供一个提示和细心的对我们所有的客户。 我们的工程师的知识和技能在一个专业的和一致的质量服务给我们的客户。 只是检查与我们的有竞争力的报价。<br>
                                <br>
                                咖啡<br>
                                <br>
                                我们只采购原产地农场庄园的咖啡豆，如巴西 印尼 坦桑尼亚 危地马拉 秘鲁 埃塞俄比亚 哥伦比亚等 我们精心挑选的咖啡豆子和经验丰富的烘焙师。帮每一个客户提供不同风味的咖啡拼配。<br>
                                <br>
                                茶、糖浆、果酱等<br>
                                <br>
                                我们带来销售法国安德鲁品牌系列糖浆、果酱条酱产品，香港又一堡港式红茶 奶茶产品。<br>
                                <br>
                                培训中心<br>
                                <br>
                                我们的专培训中心配备了最好的机器和设备。 我们与我们的客户紧密合作,确保所有咖啡师完成我们的课程与一个坚实的培训和技能。公司或个人希望咖啡师的工作。我们只使用最好的设备和产品。<br>
                                <br>
                                咖啡供应<br>
                                <br>
                                熟练的咖啡师会发现几乎所有必要的用品,清洁用品和设备通过我们。 我们以优秀的销售最好的品牌设备和产品价格。 我们与我们的客户紧密合作,以确保他们有最好的和最合适的供应他们的个人需求。<br>
                                <br>
                                销售、租赁和融资选择<br>
                                <br>
                                我们承认每个企业都是独特的,每个业务的需求是不同的。 这就是为什么我们提供设备的选择,反映了客户的特定需求。 从机器的销售和租赁,通过租赁,我们灵活的选择在这里为您的业务工作。<br>
                                <br>
                                    &nbsp;
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
