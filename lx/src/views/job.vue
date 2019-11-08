<template>
    <div id="right">
        <div class="right_title">
            <!--当前位置 开始-->
        
                <!--当前位置 结束-->
                <h2>
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                    人才招聘
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                </h2>
        </div>
        <div class="right_body">
            <ul class="joblist">
                <li>
                    <table class="job_table">
                        <tbody>
                            <tr>
                                <th class="t1">职位名称</th>
                                <td colspan="2" class="t2">前台接待</td>
                                <td>
                                    <div class="operation">
                                        <!--  -->
                                        <!-- <a href="/resume3.html"> -->
                                        <router-link to="" @click.native="change">
                                        <span class="btn" >应聘此岗位</span>
                                        </router-link>

                                        <!-- </a> -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="">招聘人数</th>
                                <td class="t2">2</td>
                                <th class="t3">有效期至</th>
                                <td class="t4">长期有效</td>
                            </tr>
                            <tr>
                                <th class="">学历要求</th>
                                <td class="t2">大专</td>
                                <th class="t3">性别要求</th>
                                <td class="t4">女</td>
                            </tr>
                            <tr>
                                <th class="">年龄要求</th>
                                <td class="t2">20-25</td>
                                <th class="t3">薪金待遇</th>
                                <td class="t4">面议</td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <th class="">语言要求</th>
                                <td class="t2">不限</td>
                                <th class="t3">工作地点</th>
                                <td class="t4">北京</td>
                            </tr>
                            <tr>
                                <th>详细要求</th>
                                <td colspan="3" class="Requirement">
                                    <div class="cc_l">职位要求：</div>
                                    <div class="cc_m" style="height: 100%">
                                        1、性格开朗，待人热情，身高1.60米以上，形象好，气质佳；<br>
                                        2、普通话流利，具有良好的语言表达能力和沟通应变能力；<br>
                                        3、熟练使用电脑、传真机及各种办公软件word，excel；<br>
                                        4、工作积极主动，认真严谨，具备良好的团队合作精神；<br>
                                        5、具有良好的思想道德素质，责任心强，较强的服务意识。
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li>
                    <table class="job_table">
                        <tbody>
                            <tr>
                                <th class="t1">职位名称</th>
                                <td colspan="2" class="t2">平面设计师</td>
                                <td>
                                    <div class="operation">
                                        <!-- 跳转 -->
                                      <router-link to="" @click.native="change1">
                                        <span class="btn" >应聘此岗位</span>
                                        </router-link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="">招聘人数</th>
                                <td class="t2">2</td>
                                <th class="t3">有效期至</th>
                                <td class="t4">长期有效</td>
                            </tr>
                            <tr>
                                <th class="">学历要求</th>
                                <td class="t2">大专以上</td>
                                <th class="t3">性别要求</th>
                                <td class="t4">女</td>
                            </tr>
                            <tr>
                                <th class="">年龄要求</th>
                                <td class="t2">20-25</td>
                                <th class="t3">3000-5000</th>
                                <td class="t4">面议</td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <th class="">语言要求</th>
                                <td class="t2">不限</td>
                                <th class="t3">工作地点</th>
                                <td class="t4">北京</td>
                            </tr>
                            <tr>
                                <th>详细要求</th>
                                <td colspan="3" class="Requirement">
                                    <div class="cc_l"><strong>职位说明：</strong></div>
                                    <div class="cc_m">
	                                    从事我司软件产品相关美术设计，包括企业Logo、Flash动画设计、图标设计、网页美工等
                                    </div>
                                    <div class="cc_l"><strong>职位要求：</strong></div>
                                    <div class="cc_m" style="height: 100%">
                                                1、美术、平面设计相关专业，大专以上学历；<br>
                                                2、有扎实的美术功底、良好的创意思维和理解能力，能及时把握客户需求；<br>
                                                3、熟练使用设计相关工具，如Photoshop、Illustrator、Dreamweaver、Flash等；<br>
                                                4、了解div+css+js网页布局设计；<br>
                                                5、善于与人沟通，良好的团队合作精神和高度的责任感，能够承受压力，有创新精神，保证工作质量；
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        change(){
        // this.$router.push({path:'resume',params:{name:'前台接待'}});
        this.$router.push({name:'resume',params:{name:'前台接待'}});

        },
        change1(){
        // this.$router.push({path:'resume',params:{name:'前台接待'}});
        this.$router.push({name:'resume',params:{name:'平面设计师'}});

        }

    }
}
</script>

<style scoped>
#right{ float: none;margin: 0 auto; }
.job{ }
.joblist { }
.joblist li {overflow: hidden;}
table.job_table { margin:8px 0px; padding:0px; text-align:center; width:100%; border-collapse:collapse;}
table.job_table td{ padding:8px 5px; border:1px solid #DADBD6;}
table.job_table .Requirement{ text-align:left; padding:8px 5px; line-height:1.5em;}
table.job_table th{color:#333; font-weight:bold; text-align:center; border:1px solid #DADBD6;}
table.job_table .t1 { font-weight:bold;padding:5px 0;width:20%;}
table.job_table .t2 { text-align:left;width:25%;}
table.job_table .t3 {font-weight:bold;width:25%;}
table.job_table .t4 {text-align:left;width:25%;}
table.job_table .operation{text-align:center; margin:0 auto;}
</style>
