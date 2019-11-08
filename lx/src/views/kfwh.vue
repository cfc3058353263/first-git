<template>
  <div class="article">
      <!--右侧区域 开始-->
        <div id="right">
            <div class="right_title">            
                    <!--当前位置 结束-->
                <h2>
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                    咖啡文化
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                </h2>
            </div>
            <div class="right_body">
                <ul class="textlist">
                    <!--循环开始-->
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/240.html" target="_blank" title="美国咖啡历史：从牛仔咖啡到精品咖啡">美国咖啡历史：从牛仔咖啡到精品咖啡</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/239.html" target="_blank" title="咖啡是德国音乐家贝多芬创作的灵感泉源">咖啡是德国音乐家贝多芬创作的灵感泉源</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/238.html" target="_blank" title="英国无心栽柳培育圣赫勒拿咖啡">英国无心栽柳培育圣赫勒拿咖啡</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/237.html" target="_blank" title="伦敦证券交易所是由咖啡馆进化而来">伦敦证券交易所是由咖啡馆进化而来</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/236.html" target="_blank" title="人类史上争取咖啡馆言论自由终获胜利的重要案例">人类史上争取咖啡馆言论自由终获胜利的重要案例</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/235.html" target="_blank" title="荷兰培育“咖啡母树”成就咖啡荣景">荷兰培育“咖啡母树”成就咖啡荣景</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/234.html" target="_blank" title="埃塞俄比亚建造“彩虹之屋”纪念兰波">埃塞俄比亚建造“彩虹之屋”纪念兰波</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/233.html" target="_blank" title="了解西方文化，必先懂其咖啡">了解西方文化，必先懂其咖啡</a>.
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/232.html" target="_blank" title="也门咖啡——消逝中的阿拉伯狂野">也门咖啡——消逝中的阿拉伯狂野</a>
                    </li>
                    <li>
                        <span class="float_right">2017-05-08</span>
                        <a href="/kfwh/231.html" target="_blank" title="十二星座专属咖啡，看看是你的菜吗？">十二星座专属咖啡，看看是你的菜吗？</a>
                    </li>
                    <!--循环结束-->
                </ul>
                <div class="page"></div>
            </div>
        <div class="right_bottom"></div>
    </div>
    <!--右侧区域 结束-->
    <div class="clear"></div></div>
</template>

<script>
export default {

}
</script>

<style>
/*文字列表*/
.textlist{ }
.textlist li { line-height:40px; height:40px;text-indent:12px; border-bottom:1px dashed #ddd;background:url(../../public/images/textlist.png) no-repeat 0 center; overflow:hidden;width:100%;/*解决ie6bug*/}
.textlist li a{  }
/*文字列表*/
.textlist1{ }
.textlist1 li { margin-top:30px; height:82px; width:582px; /*不限定宽高，在ie7有问题*/ overflow:hidden;/*解决ie6bug*/}
.textlist1 li.li0{ float:left;}
.textlist1 li.li1{ float:right;}
.textlist1 li .time{ float:left; width:48px; height:52px;  background:#015D34; color:#FFF; line-height:25px; padding:15px 12px;}
.textlist1 li .time .month{ float:left;width:48px; text-align:center; border-bottom:1px solid #FFF;}
.textlist1 li .time .year{ float:left; font-size:18px;width:48px;text-align:center;}
.textlist1 li .right_text{ float:left; width:510px; }
.textlist1 li .right_text a{ background:#E2E2E2; line-height:30px; height:30px; overflow:hidden; display:block;padding-left:10px;}
.textlist1 li .right_text p{ background:#EAEAEA;height: 31px;line-height: 20px; padding:10px 5px 10px 10px; margin-top:1px; overflow:hidden;}
</style>