<template>
<div>
    <!-- 案例 -->
<div id="floor_2_main">
    <div id="floor_2">
        <div id="floor_2_1">
            <h2>
                <img src="../../public/images/titleleftbg_1.png" align="absmiddle">
                <a href="case.html" title="成功案例" target="_blank">成功案例</a>
                <img src="../../public/images/titleleftbg_1.png" align="absmiddle">
            </h2>
            </div>
        <div id="floor_2_2">
            <ul class="gridlist2">
                <li class=" animated delay1 fadeInLeftBig" :class="img.n" v-for="(img,i) of cases" :key="i">
                    <router-link :to="img.to" :title="img.title" class="InfoPicture">
                        <img :src="require(`../../public/Upload/${img.src}`)" :title="img.title" :alt="img.title">
                            <!-- <img :src="require(  `../banner/${item.img}`) " /> -->
                    </router-link>
                    <router-link class="InfoTitle" :to="img.to" :title="img.title" v-text="`${img.title}`"></router-link>
                </li>
                <!-- <li class="n1 animated delay1 fadeInLeftBig">
                    <a href="case/226.html" title="成功案例八" target="_blank" class="InfoPicture">
                    <img src="../../public/Upload/case1.jpg" title="成功案例八" alt="成功案例八">
                    </a>
                    <a class="InfoTitle" href="case/226.html" title="成功案例八" target="_blank">
                    成功案例八
                    </a>
                </li>
                <li class="n2 animated delay2 fadeInLeftBig">
                    <a href="case/225.html" title="成功案例七" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060191.jpg" title="成功案例七" alt="成功案例七">
                    </a>
                    <a class="InfoTitle" href="case/225.html" title="成功案例七" target="_blank">
                    成功案例七
                    </a>
                </li>
                <li class="n3 animated delay3 fadeInLeftBig">
                    <a href="case/224.html" title="成功案例六" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060182.jpg" title="成功案例六" alt="成功案例六">
                    </a>
                    <a class="InfoTitle" href="case/224.html" title="成功案例六" target="_blank">
                    成功案例六
                    </a>
                </li>
                <li class="n4 animated delay4 fadeInLeftBig">
                    <a href="case/223.html" title="成功案例五" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060173.jpg" title="成功案例五" alt="成功案例五">
                    </a>
                    <a class="InfoTitle" href="case/223.html" title="成功案例五" target="_blank">
                    成功案例五
                    </a>
                </li>
                <li class="n5 animated delay5 fadeInLeftBig">
                    <a href="case/222.html" title="成功案例四" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060166.jpg" title="成功案例四" alt="成功案例四">
                    </a>
                    <a class="InfoTitle" href="case/222.html" title="成功案例四" target="_blank">成功案例四</a>
                </li>
                <li class="n6 animated delay6 fadeInLeftBig">
                    <a href="case/221.html" title="成功案例三" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060159.jpg" title="成功案例三" alt="成功案例三">
                    </a>
                    <a class="InfoTitle" href="case/221.html" title="成功案例三" target="_blank">成功案例三</a>
                </li>
                <li class="n7 animated delay7 fadeInLeftBig">
                    <a href="case/220.html" title="成功案例二" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060149.jpg" title="成功案例二" alt="成功案例二">
                    </a>
                    <a class="InfoTitle" href="case/220.html" title="成功案例二" target="_blank">
                    成功案例二
                    </a>
                </li>
                <li class="n8 animated delay8 fadeInLeftBig">
                    <a href="case/219.html" title="成功案例一" target="_blank" class="InfoPicture">
                    <img src="Upload/1494060132.jpg" title="成功案例一" alt="成功案例一">
                    </a>
                    <a class="InfoTitle" href="case/219.html" title="成功案例一" target="_blank">
                    成功案例一
                    </a>
                </li> -->
            </ul>
        </div>
    <div id="floor_2_3">
        <a href="case.html" target="_blank" title="查看更多" class="ViewMore">查看更多
            </a>
        </div>
    </div>
</div>    
<!-- 关于我们 -->
<div id="floor_3_main">
    <div id="floor_3">
        <div class="left_title3">
            <h2>
                <img src="../../public/images/titleleftbg_1.png" align="absmiddle">
                <a href="aboutus.html" title="关于我们" target="_blank">
                    关于我们
                </a>
                <img src="../../public/images/titleleftbg_1.png" align="absmiddle">
            </h2>
        </div>
        <div class="left_body3">
            <div class="ChannelContent">
                关于我们欢迎
欢迎来到xx咖啡有限公司我们是一个强大的专业公司提供完整解决中国咖啡市场方案。 从咖啡、咖啡设备和咖啡供应合格的工程服务,我们提供全面优质服务企业,办公室,餐饮,酒店交易。 我们的经验、资源和专业知识,来自全球市场和我们带来新的灵感和最新国际咖啡中国市场的趋势。经验
我们在咖啡行业经验丰富,只采购高质量的咖啡品牌,尝试和测试的设备。 我们的建议和专业知识带...
                <a class="ChannelUrl" href="aboutus.html" target="_blank">
                查看详情&gt;&gt;
                </a>
            </div>
        </div>

            <div class="left_bottom3">某某咖啡馆</div>
    </div>
</div>
<!-- 新闻资讯 -->
<div id="floor_5">
    <div id="floor_5_1">
        <div class="left_title5">
            <h2>
                <a href="news.html" title="新闻资讯" target="_blank">新闻资讯</a>
            </h2>
        </div>
            <div class="left_body5">
                <div class="tempWrap" style="overflow:hidden; position:relative; width:510px">
                    <ul class="thumblist1" style="width: 5100px;position: relative;overflow: hidden;padding: 0px;margin: 0px;" :style="ulStyle" :class="ulClass">
                        <!-- 小轮播 -->
                        <li class="clone" style="float: left; width: 510px;"  v-for="(item,index) of imgList" :key="index">
                        <!-- <a href="industrytrends/211.html" title="云南咖啡是否需要收储制度" target="_blank">
                            <img src="../../public/Upload/1494059470.jpg" title="云南咖啡是否需要收储制度" alt="云南咖啡是否需要收储制度">
                            </a>
                            <a class="InfoTitle" href="industrytrends/211.html" title="云南咖啡是否需要收储制度" target="_blank">
                            云南咖啡是否需要收储制度
                            </a>
                        <p>11月18日，云南最大的咖啡企业——德宏后谷咖啡有限公司对外界宣布，后谷将率先进行采收报价，即按照纽约咖啡期货价格折...</p> -->
                            <router-link to="javascript:;" :title="item.title">
                            <img :src="require(  `../../public/Upload/${item.img}`) " />
                            </router-link>
                            <router-link class="InfoTitle" to="industrytrends.html" :title="item.tilte">
                                {{item.title}}
                            </router-link>
                            <p>{{item.text}}</p>
                        </li>
                <!-- <li style="float: left; width: 510px;">
                            <a href="industrytrends/218.html" title="上班族喝咖啡有什么好处？" target="_blank">
                            <img src="Upload/1494059516.jpg" title="上班族喝咖啡有什么好处？" alt="上班族喝咖啡有什么好处？">
                            </a>
                            <a class="InfoTitle" href="industrytrends/218.html" title="上班族喝咖啡有什么好处？" target="_blank">
                            上班族喝咖啡有什么好处？
                            </a>
                            <p>现如今，咖啡已经成为了办公室白领常见的饮品之一。因为喝咖啡不仅可以提神，还具有其他意想不到的的功效。不过，要提醒大家的是有些食物不能同时和咖...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="companynews/217.html" title="马来西亚顶赫白咖啡正式进入中国市场" target="_blank">
                            <img src="Upload/1494059177.jpg" title="马来西亚顶赫白咖啡正式进入中国市场" alt="马来西亚顶赫白咖啡正式进入中国市场">
                            </a>
                            <a class="InfoTitle" href="companynews/217.html" title="马来西亚顶赫白咖啡正式进入中国市场" target="_blank">
                            马来西亚顶赫白咖啡正式进入中国市场
                            </a>
                            <p>一场咖啡旋风即将席卷中国。9月，深圳醉心甜餐饮管理有限公司与马来西亚签约，将马来西亚国宝级特产——顶赫白咖啡正式引进...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="industrytrends/216.html" title="咖啡爱好者不用担心会犯高血压了！" target="_blank">
                            <img src="Upload/1494059353.jpg" title="咖啡爱好者不用担心会犯高血压了！" alt="咖啡爱好者不用担心会犯高血压了！">
                            </a>
                            <a class="InfoTitle" href="industrytrends/216.html" title="咖啡爱好者不用担心会犯高血压了！" target="_blank">
                            咖啡爱好者不用担心会犯高血压了！
                            </a>
                            <p>常年被用来反对喝咖啡的理由是：它会让血压升高。高血压不可轻视，这会让你处在中风及心脏病发作的风险中。据外媒报导，事实却是这样的：...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="industrytrends/215.html" title="意大利咖啡兴起 百年CAFFE PASCUCCI受捧" target="_blank">
                                <img src="Upload/1494059363.jpg" title="意大利咖啡兴起 百年CAFFE PASCUCCI受捧" alt="意大利咖啡兴起 百年CAFFE PASCUCCI受捧">
                            </a>
                            <a class="InfoTitle" href="industrytrends/215.html" title="意大利咖啡兴起 百年CAFFE PASCUCCI受捧" target="_blank">
                            意大利咖啡兴起 百年CAFFE PASCUCCI受捧
                            </a>
                            <p>如今，中国的大街小巷都开满了咖啡馆。到咖啡馆喝咖啡，对中国消费者来说，更多地代表了一种文化、一种在消费体验上更有质感的生活方式。相较于法式咖...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="industrytrends/214.html" title="用1895分钟连续制作1000多杯咖啡" target="_blank">
                            <img src="Upload/1494059373.jpg" title="用1895分钟连续制作1000多杯咖啡" alt="用1895分钟连续制作1000多杯咖啡">
                            </a>
                            <a class="InfoTitle" href="industrytrends/214.html" title="用1895分钟连续制作1000多杯咖啡" target="_blank">
                            用1895分钟连续制作1000多杯咖啡
                            </a>
                            <p>与众多老北洋、知名校友“高大上”的献礼不同，天津大学大学生创业团队——109咖啡室献礼天大1...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="industrytrends/213.html" title="拿铁不放咖啡 知道这些告别咖啡＂小白＂" target="_blank">
                                <img src="Upload/1494059383.jpg" title="拿铁不放咖啡 知道这些告别咖啡＂小白＂" alt="拿铁不放咖啡 知道这些告别咖啡＂小白＂">
                            </a>
                            <a class="InfoTitle" href="industrytrends/213.html" title="拿铁不放咖啡 知道这些告别咖啡＂小白＂" target="_blank">
                            拿铁不放咖啡 知道这些告别咖啡＂小白＂</a>
                            <p>在欧洲日常生活中，咖啡馆有着独特的意义，它不仅仅是为了休息、吃饭、会友，而成为当地人们生活中的固定的仪式。对咖啡，不少人仍存在不少误解。或许...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="industrytrends/212.html" title="什么样才算正宗？卡布奇诺咖啡遭遇“身份危机”" target="_blank">
                            <img src="Upload/1494059411.jpg" title="什么样才算正宗？卡布奇诺咖啡遭遇“身份危机”" alt="什么样才算正宗？卡布奇诺咖啡遭遇“身份危机”">
                            </a>
                            <a class="InfoTitle" href="industrytrends/212.html" title="什么样才算正宗？卡布奇诺咖啡遭遇“身份危机”" target="_blank">
                            什么样才算正宗？卡布奇诺咖啡遭遇“身份危机”
                            </a>
                            <p>中新网10月10日电 美国媒体9日刊登的文章称，卡布奇诺是深受“咖啡迷”喜欢的一种咖啡饮品。但现在，这个曾经的特种咖...</p>
                        </li>
                        <li style="float: left; width: 510px;">
                            <a href="industrytrends/211.html" title="云南咖啡是否需要收储制度" target="_blank">
                            <img src="Upload/1494059470.jpg" title="云南咖啡是否需要收储制度" alt="云南咖啡是否需要收储制度">
                            </a>
                            <a class="InfoTitle" href="industrytrends/211.html" title="云南咖啡是否需要收储制度" target="_blank">
                            云南咖啡是否需要收储制度
                            </a>
                            <p>11月18日，云南最大的咖啡企业——德宏后谷咖啡有限公司对外界宣布，后谷将率先进行采收报价，即按照纽约咖啡期货价格折...</p>
                        </li>
                        <li class="clone" style="float: left; width: 510px;">
                            <a href="industrytrends/218.html" title="上班族喝咖啡有什么好处？" target="_blank">
                            <img src="Upload/1494059516.jpg" title="上班族喝咖啡有什么好处？" alt="上班族喝咖啡有什么好处？">
                            </a>
                            <a class="InfoTitle" href="industrytrends/218.html" title="上班族喝咖啡有什么好处？" target="_blank">
                            上班族喝咖啡有什么好处？
                            </a>
                            <p>现如今，咖啡已经成为了办公室白领常见的饮品之一。因为喝咖啡不仅可以提神，还具有其他意想不到的的功效。不过，要提醒大家的是有些食物不能同时和咖...</p>
                </li> -->
                        <li class="clone" style="float: left; width: 510px;">
                            <img :src="require(  `../../public/Upload/${imgList[0].img}`) " />
                        </li>
                    </ul>
                </div>
                <!-- 左右按钮 -->
                <a class="prev" href="javascript:void(0)" @click="move(-1)"></a>
                <a class="next" href="javascript:void(0)" @click="move(1)"></a>
            </div>
            <div class="left_bottom5">
                <a href="product.html" target="_blank" title="查看更多" class="ViewMore">查看更多</a>
            </div>
        </div>
<div id="floor_5_2">
    <div class="left_title5">
        <h2>
            <a href="contactus.html" title="联系我们" target="_blank">联系我们</a>
        </h2>
    </div>
    <div class="left_body5">
        <div class="ChannelContent">
            <div id="dituContent" style="width: 100%; height: 248px;">
                <!-- 百度地图 开始-->
                <div id="fli" class="fli"></div>
                <!-- 百度地图 结束-->
            </div>
        </div>
<div class="left_body1">
    <div class="contact_wrap1">
        <b class="ico2">电话：</b>010-999999999<br>
        <b class="ico3">邮件：</b>12345@qq.com<br>
        <b class="ico4">地址：</b>青岛市北区金坛路17号<br>
    </div>
</div>
</div>
    <div class="left_bottom5"> </div>
        </div>
    <div class="clear"></div>
    </div>
</div>
</template>
<script>
export default {
     name:'',
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
             imgList:[
                {img:'news01.jpg',title:"云南咖啡是否需要收储制度",text:"11月18日，云南最大的咖啡企业——德宏后谷咖啡有限公司对外界宣布，后谷将率先进行采收报价，即按照纽约咖啡期货价格折..."},
                {img:'news02.jpg',title:"上班族喝咖啡有什么好处？",text:"现如今，咖啡已经成为了办公室白领常见的饮品之一。因为喝咖啡不仅可以提神，还具有其他意想不到的的功效。不过，要提醒大家的是有些食物不能同时和咖..."},
                {img:'news03.jpg',title:"马来西亚顶赫白咖啡正式进入中国市场",text:"一场咖啡旋风即将席卷中国。9月，深圳醉心甜餐饮管理有限公司与马来西亚签约，将马来西亚国宝级特产——顶赫白咖啡正式引进..."},
                {img:'news04.jpg',title:"咖啡爱好者不用担心会犯高血压了！",text:"常年被用来反对喝咖啡的理由是：它会让血压升高。高血压不可轻视，这会让你处在中风及心脏病发作的风险中。据外媒报导，事实却是这样的：..."},
                {img:'news05.jpg',title:"意大利咖啡兴起 百年CAFFE PASCUCCI受捧",text:"如今，中国的大街小巷都开满了咖啡馆。到咖啡馆喝咖啡，对中国消费者来说，更多地代表了一种文化、一种在消费体验上更有质感的生活方式。相较于法式咖..."},
                {img:'news06.jpg',title:"用1895分钟连续制作1000多杯咖啡",text:"与众多老北洋、知名校友“高大上”的献礼不同，天津大学大学生创业团队——109咖啡室献礼天大1..."},
                {img:'news07.jpg',title:"拿铁不放咖啡 知道这些告别咖啡＂小白＂",text:"在欧洲日常生活中，咖啡馆有着独特的意义，它不仅仅是为了休息、吃饭、会友，而成为当地人们生活中的固定的仪式。对咖啡，不少人仍存在不少误解。或许..."},
                {img:'news08.jpg',title:"什么样才算正宗？卡布奇诺咖啡遭遇“身份危机＂小白＂",text:"中新网10月10日电 美国媒体9日刊登的文章称，卡布奇诺是深受“咖啡迷”喜欢的一种咖啡饮品。但现在，这个曾经的特种咖..."},
                {img:'news01.jpg',title:"云南咖啡是否需要收储制度",text:"11月18日，云南最大的咖啡企业——德宏后谷咖啡有限公司对外界宣布，后谷将率先进行采收报价，即按照纽约咖啡期货价格折..."},
                {img:'news02.jpg',title:"上班族喝咖啡有什么好处？",text:"现如今，咖啡已经成为了办公室白领常见的饮品之一。因为喝咖啡不仅可以提神，还具有其他意想不到的的功效。不过，要提醒大家的是有些食物不能同时和咖..."},
                 
          ],
                      // 图片宽
          imgWidth:510,
          i:0,//当前正在播放的是第几张图片
          canClick:true,//节流
          ulClass:{//定义所有图片的容器div上是否有transition
          hasTrans:true //在css中提前定义好的样式类，其中包含transition属性
          //如果值为true，则当前图片容器的div上就有过渡属性
          //如果不想让图片容器的div上有过渡属性，则设置该值为false
                    },
        }
    },
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
     methods:{
           stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    },
         move(i){
      //如果可以单击
      if(this.canClick){//防抖/节流
      if(i==-1&&this.i==0){
          this.stop()
          this.ulClass.hasTrans=false;
          setTimeout(()=>{
              this.i=this.imgList.length;
              setTimeout(()=>{
                  this.ulClass.hasTrans=true;
                  this.i+=i;
                  setTimeout(()=>{
                      this.canClick=true;
                      this.start()
                  },200)
              },50)
          },50)
      }else if(i==1&&this.i==this.imgList.length-1){
            //如果向左移动，且现在已经显示最后一张了
          this.i+=i;//可以先带transition效果，左移一次
            setTimeout(()=>{
            this.canClick=true;
          },300)
          setTimeout(()=>{//等左移完，再去掉transition效果，骗用户
            this.ulClass.hasTrans=false;
            setTimeout(()=>{//等50ms后，瞬间将父级div移动到显示第一张图片
              this.i=0;
              setTimeout(()=>{//等50ms后，再次启用transition，为下次提供动画
                this.ulClass.hasTrans=true;
                setTimeout(()=>{//稍等片刻之后允许单击
                  this.canClick=true;
                  this.start()
                })
              },20)
            },20)
          },500)
        }else{//如果不是两端的情况，则保持原来的逻辑
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
            // this.start()
          },500)
        }
        // this.i+=i;//才i+1 或 i-1
        // this.canClick=false;//立刻禁止单击，即使再单击，if也不成立了
        // setTimeout(()=>{//等动画播放后，再允许单击
        //   this.canClick=true;
        // },600)
      }
    },
        moveTo(i){
        if(this.canClick){
        this.i=i;
        this.stop()
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
          this.start()
        },300)
      }
        }
       },
       created:function(){
     },
      computed:{
        //希望网页宽度变化或i变化，则自动重新计算ul的位置和大小
    ulStyle(){//修饰所有图片的父元素
    /* 最外层div的宽度 */
      var width=this.imgWidth*(this.imgList.length+1)+"px";
    //  位移的距离
      var marginLeft=-this.i*this.imgWidth+"px";
      return { width, marginLeft }
    }
     },
     created(){
          this.start();
     },  
}
</script>
<style scoped>
#floor_2_main{background:url(../../public/images/floor_2_main.jpg) no-repeat center top;}
#floor_2_1 { text-align: center;height:40px;padding: 41px 0;}
#floor_2_1 h2 {  font-size: 30px;color: #fff;font-weight: bold;}
#floor_2_1 h2 a{ font-size: 30px;color: #fff;font-weight: bold; }
#floor_2_2 {overflow:hidden;margin:50px 0 0 0;}
#floor_2_3 {overflow:hidden;margin:40px 0 0 0;height: 46px;}
#floor_2_3 .ViewMore{font-size: 18px;color: #351000;font-weight: bold;height: 42px;
                    line-height: 42px;text-align: center;display: block;border: #351000 solid 2px;border-radius: 2px;}
/*橱窗列表2*/
.gridlist2{ overflow:hidden; }
.gridlist2 li { float:left; width:269px;text-align:center; margin:0 35px 0 0; overflow:hidden;position:relative; }
.gridlist2 li.n4{margin:0px 0 40px 0}
.gridlist2 li.n8{margin:0px;}
.gridlist2 li img { width:269px;  display:block;}
.gridlist2 li .InfoTitle {width:269px;position: absolute;left:0;bottom:0; text-overflow:ellipsis; white-space:nowrap; line-height:24px; display:block;
 background:url(../../public/images/gridlist3_li_InfoTitle.png) repeat; color:#FFF;}
/* 关于我们 */
#floor_3_main{ background:url(../../public/images/floor_3_main.jpg) no-repeat center center;height:531px;margin:50px 0 0 0;}
#floor_3{padding:50px 0px;  }
#floor_4_main{ background:url(../../public/images/floor_4_main.png) no-repeat center center;margin:40px 0 0 0;}
/* 新闻主体 */
#floor_5_main{ padding-top:60px;}
#floor_5{background:#351000 url(../../public/images/floor_5.jpg) no-repeat center top;}
#floor_5_1{padding: 0 0 0 40px;float:left;width:510px; overflow:hidden;}
#floor_5_2{float:right;width:550px;overflow:hidden;margin:0 40px 0 0;}
/* 动画 */
.hasTrans{
         transition: all .5s linear;
     }
/*带缩略图文字列表*/

/*橱窗列表4*/
.thumblist1{ overflow:hidden; }
.thumblist1 li { position:relative;  display:inline;}
.thumblist1 li a { text-overflow:ellipsis;width:100%; white-space:nowrap;overflow:hidden; line-height:28px;display:block;font-size:16px;}
.thumblist1 li img { width:510px; height:250px;}
.thumblist1 li .InfoTitle{display: block;font-size: 16px;height: 27px;overflow: hidden;color: #fff;text-align:left;text-overflow:ellipsis; white-space:nowrap;}
.thumblist1 li .InfoTitle:hover{color:#cfc0ba;}
.thumblist1 li p{color: #8d786f;font-size: 14px;height:51px;overflow:hidden;}
/* 左侧样式 */
.left_title5 { border-bottom: #9c8980 solid 1px;font-size: 26px;height: 40px;padding: 20px 0 10px 0;line-height: 40px; margin: 0 0 20px 0;}
.left_title5 h2 { font-size: 26px;color: #fff; }
.left_title5 h2 a{ font-size: 26px;color: #fff; }
.left_body5 { position:relative; zoom:1;background: url(../../public/images/left_body4.png) no-repeat center center;border-top:0; border-bottom: 0px} 
/* 右侧样式 */
#dituContent{height:250px;}
.left_body5 .prev{ position:absolute;top:-65px;right:39px;display: block;width: 30px;height: 30px;overflow: hidden;background: url(../../public/images/left_body5_prev.png) no-repeat;cursor: pointer;}     
.left_body5 .prev:hover{background: url(../../public/images/left_body5_prev_hover.png) no-repeat;}
.left_body5 .next{position:absolute;top:-65px;right:-5px;display: block;width: 36px;height: 30px;overflow: hidden;background: url(../../public/images/left_body5_next.png) no-repeat;cursor: pointer;}
.left_body5 .next:hover{background: url(../../public/images/left_body5_next_hover.png) no-repeat;}
.left_body5 #dituContent{width:100%;height:248px;border:#ccc solid 1px;float:right}
.left_bottom5 {margin:20px 0 0 0;}
.left_bottom5 .ViewMore{font-size: 18px;color: #fff;font-weight: bold;height: 42px;line-height: 42px;text-align: center;display: block;border: #fff solid 1px;}
/* 百度地图 */
.fli{ width: 100%;height: 100%;/* overflow: hidden; */margin: 0;}
/* 联系方式 */
.left_body1 { padding:5px; overflow:hidden; zoom:1; border-top:0; border-bottom:0}
.contact_wrap1{ line-height:40px; padding-top: 22px; color:#FFF; overflow:hidden;font-size:16px;}
.contact_wrap1 b{ font-weight:normal;}
/* 图片、文字 */
.contact_wrap1 .ico1{ background:url(../../public/images/phone.gif) no-repeat 8px center; padding: 5px 0px 5px 40px;}
.contact_wrap1 .ico2{ background:url(../../public/images/fax.png) no-repeat left center; padding: 5px 0px 5px 40px;}
.contact_wrap1 .ico3{ background:url(../../public/images/email.png) no-repeat 1px center; padding: 5px 0px 5px 40px;}
.contact_wrap1 .ico4{ background:url(../../public/images/address.png) no-repeat left center; padding: 5px 0px 5px 40px;}
</style>
