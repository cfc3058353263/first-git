<template>
  <header>
    <div>
      <div id="top_main">
        <div id="top">
          <div id="top_1">
            <router-link to="login">登录&nbsp;</router-link>
            <!-- <a href="/public/login/l/cn" target="_self">
                [登录]&nbsp;
            </a>-->
            <router-link to="reg">注册&nbsp;</router-link>
            <!-- <a href="/public/reg/l/cn" target="_self">
                [注册]&nbsp;
            </a>-->
          </div>
        </div>
      </div>
      <div id="logo_main">
        <div id="logo">
          <!--网站Logo 开始-->
          <div class="WebLogo">
            <a href="default.htm" target="_self">
              <img src="Upload/public/logo.png" title="某某咖啡馆" alt="某某咖啡馆" />
            </a>
          </div>
          <div class="Telephone">010-99999999</div>
          <div class="Search">
            <form name="frmInfoSearch" method="post" action="/channel/search/l/cn">
              <table class="search_table">
                <tr>
                  <th>
                    <input name="Keywords" class="form_text" type="text" value maxlength="50" />
                  </th>
                  <td>
                    <input
                      class="form_button btn btn-small"
                      name="submit8"
                      type="submit"
                      value="搜索"
                    />
                  </td>
                </tr>
              </table>
              <input
                type="hidden"
                name="__hash__"
                value="e251273eb74a8ee3f661a7af00915af1_c68b151466ca00b97e1d6b49cf25c472"
              />
            </form>
          </div>
        </div>
      </div>
      <div id="navigation_main">
        <div id="navigation">
          <ul class="navigationlist">
            <li v-for="(elem,i) of tasks" :key="i" @click="toggle(i)">
              <!-- @mouseenter.native="trans(i)" -->
              <!-- 如果i==num 就添加样式 不等于就添加空白样式 -->
              <router-link
                :to="elem.url"
                :class="i==num?'current':''"
                @mouseenter.native="trans(i)"
              >{{elem.text}}</router-link>
              <!-- 如果i==num1 就添加样式 不等于就添加空白样式 -->
              <ul v-if="elem.ul!==''" class="subnavigationlist">
                <li v-for="(li,index) of elem.ul" :key="index">
                  <router-link :to="li.url">{{li.text}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
// 导出默认对象
export default {
  data() {
    //当前组件共享数据
    return {
      num: 0, //保存鼠标点击后的参数
      num1: 0, //保存鼠标触碰后的参数
      tasks: [
        { text: "网站首页", url: "default" },
        {
          text: "关于我们",
          url: "aboutus",
          ul: [
            { text: "企业文化", url: "culture" },
            { text: "资质荣誉", url: "honor" },
            { text: "咖啡视频", url: "kfsp" }
          ]
        },
        {
          text: "新闻资讯",
          url: "news",
          ul: [
            { text: "公司新闻", url: "companynews" },
            { text: "行业动态", url: "industrytrends" }
          ]
        },
        {
          text: "产品中心",
          url: "product",
          ul: [
            { text: "烘焙甜点", url: "hbtd" },
            { text: "意式咖啡", url: "yskf" },
            { text: "清爽饮品", url: "qsyp" },
            { text: "商务套餐", url: "swtc" }
          ]
        },
        { text: "成功案例", url: "case" },
        { text: "咖啡文化", url: "kfwh" },
        { text: "人才招聘", url: "job" },
        { text: "在线留言", url: "guestbook" },
        { text: "联系我们", url: "contactus" }
      ],
      height: 39, //每个li的长度
      liHeight: [] //保存li的总长度
    };
  },
  methods: {
    toggle(i) {
      this.num = i;
    },
    trans(i) {
      this.num1 = i;
    },
    ulStyle() {
      var ulHeight;
      for (var item of this.tasks) {
        // console.log(item.ul)
        if (item.ul) {
          ulHeight = this.height * item.ul.length + "px";
          this.liHeight.push(ulHeight);
        }
        // 添加数组数据ulHeight
      }
    }
  },
  created() {
    this.ulStyle();
  },
  computed: {
    // ulStyle(){
    //     var ulHeight;
    //     for(var item of tasks){
    //         if(item.ul!=""){
    //             ulHeight = this.height*item.ul.length+"px"
    //         }
    //         // 添加数组数据ulHeight
    //         this.liHeight.push(ulHeight)
    //     }
    //     return ulHeight
    // }
  },
  watch: {
    // liHeight(){
    //     console.log(this.liHeight)
    // }
  }
};
</script>
<style scoped>
/* top */
#top_main {
  height: 27px;
  background: url(../assets/logo_main.jpg) repeat;
}
#top {
  height: 27px;
  line-height: 27px;
  text-align: right;
}
#top_1 {
  float: left;
  text-align: left;
}
#top_2 {
  float: right;
  text-align: right;
}
#top .MobileEdition {
}
#top a {
  color: #351000;
}
#top a:hover {
  color: #f7b786;
  text-decoration: none;
}
/*Logo*/
#logo_main {
  background: url(../assets/logo_main.jpg) repeat;
  height: 80px;
}
#logo {
  overflow: hidden;
}
#logo .WebLogo {
  float: left;
  padding: 11px 0;
}
#logo .Search {
  width: 300px;
  float: right;
  padding: 20px 30px 0 0;
}
#logo .Search .form_text {
  width: 100%;
  margin: 0px;
  text-indent: 5px;
  height: 32px;
  outline: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 200px;
}
#logo .Search .form_button {
  border-radius: none;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  background: #9c541a;
}
#logo .Search input {
  background: url(../assets/SearchInput.png) repeat;
  border: none;
}
#logo .Search td {
  padding: 0;
}
#logo .Telephone {
  float: right;
  background: url(../assets/Telephone.png) left center no-repeat;
  line-height: 80px;
  padding: 0 0 0 46px;
  color: #351000;
  font-size: 28px;
  font-family: Impact;
}
#logo .Language {
  width: 500px;
  float: right;
  padding: 10px;
}
#logo .Language .MobileEdition {
  font-weight: bold;
  color: red;
}
#logo .Member {
  width: 500px;
  height: 35px;
  line-height: 35px;
  float: right;
  text-align: right;
  font-weight: bold;
}
#logo .Member .MemberName,
#logo_main .Member .MemberGroupName {
  color: #f30;
}
/*导航*/
#navigation_main {
  background: url("../assets/navigation_main.jpg") top center repeat-x;
  height: 52px;
  z-index: 9;
  border-top: #974305 solid 4px;
}
#navigation ul.navigationlist li {
  float: left;
  text-align: center;
  height: 52px;
  line-height: 52px;
}
#navigation ul.navigationlist li a {
  display: block;
  padding: 0px 28px;
  color: #fff;
  font-size: 16px;
}
#navigation ul.navigationlist li a:hover {
  background: #974305;
  color: #f7b786;
}
#navigation ul.navigationlist .current {
  background: #974305;
  color: #f7b786;
}

/*导航栏下拉*/
/* 下拉导航栏ul */
#navigation ul.subnavigationlist {
  height: 0px;
  overflow: hidden;
  position: absolute;
  z-index: 100;
  background: #f3eee8;
  border-top: #d2cbc5 solid 1px;
  transition: all 0.2s linear;
}
#navigation ul.navigationlist :nth-child(2):hover ul {
  height: 114px;
}
#navigation ul.navigationlist :nth-child(3):hover ul {
  height: 76px;
}
#navigation ul.navigationlist :nth-child(4):hover ul {
  height: 152px;
}
/* .active{display: block!important;} */
#navigation ul.subnavigationlist li {
  float: none;
  padding: 0px;
  line-height: 38px;
  height: 38px;
  display: inline;
}
#navigation ul.subnavigationlist li a {
  background: #f3eee8;
  font-size: 16px;
  color: #351000;
  display: block;
  overflow: hidden;
  border-bottom: #d2cbc5 solid 1px;
  white-space: nowrap;
  font-weight: normal;
  padding: 0px 28px;
  text-align: center;
}
#navigation ul.subnavigationlist li a:hover {
  background: #974305;
  color: #f7b786;
}
</style>
