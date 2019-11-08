<template>
    <div id="right">
        <div class="right_title1">
            <!--当前位置 结束-->
            <h2>
                <img src="../assets/titleleftbg.png" align="absmiddle">
                投递简历
                <img src="../assets/titleleftbg.png" align="absmiddle">
            </h2>
        </div>
        <div class="right_body1">
            <table class="resume_table">
                <form enctype="multipart/form-data" method="post" id="frmResume" action="/channel/ResumeAdd/l/cn">
                </form>
            <tbody>
                    <tr>
                        <th>职位名称</th>
                        <td>
                            <input name="JobName" type="text" class="form_text" id="JobName" :value="resume" disabled="disabled">
                            <input id="JobID" name="JobID" type="hidden" value="3" class="form_text" maxlength="100">
                        </td>
                    </tr>
                    <tr>
                        <th>应聘人<span class="required">*</span>
                        </th>
                            <td>
                                <input name="GuestName" type="text" value="" class="form_text" id="GuestName">
                                <input id="GuestID" name="GuestID" type="hidden" value="" class="form_text" maxlength="100">
                            </td>
                    </tr>
                    <tr>
                        <th>性别</th>
                        <td>
                            <input type="radio" name="Gender" value="男" checked="checked" class="form_radio">男
                            &nbsp;&nbsp;
                            <input type="radio" name="Gender" value="女" class="form_radio">女
                        </td>
                    </tr>
                    <tr>
                        <th>出生年月</th>
                        <td>
                            <input name="Birthday" type="text" onclick="PickDate()" readonly="readonly" class="Wdate form_text" id="Birthday" onfocus="PickDate()">
                        </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <th>民族</th>
                        <td>
                            <input name="Ethnic" type="text" class="form_text" id="Ethnic">
                        </td>
                    </tr>
                    <tr>
                        <th>政治面貌</th>
                        <td>
                            <input name="Political" type="text" class="form_text" id="Political">
                        </td>
                    </tr>
                    <tr>
                        <th>最高学历</th>
                        <td>
                            <input name="Education" type="text" class="form_text" id="Education">
                        </td>
                    </tr>
                    <tr>
                         <th>籍贯</th>
                         <td>
                             <input name="Birthplace" type="text" class="form_text" id="Birthplace">
                        </td>
                    </tr>
                    <tr>
                        <th>毕业学校</th>
                        <td>
                            <input name="School" type="text" class="form_text" id="School">
                        </td>
                    </tr>
                        <tr>
                            <th>所学专业</th>
                            <td>
                                <input name="Specialty" type="text" class="form_text" id="Specialty">
                            </td>
                        </tr>
                    <tr>
                        <th>联系电话<span class="required">*</span></th>
                        <td>
                            <input name="Telephone" type="text" class="form_text" id="Telephone">
                        </td>
                    </tr>
                    <tr>
                        <th>电子邮件</th>
                        <td>
                            <input name="Email" type="text" class="form_text" id="Email">
                        </td>
                    </tr>
                    <tr>
                        <th>地址</th>
                        <td>
                            <input name="Address" type="text" class="form_text" id="Address">
                        </td>
                    </tr>
                        <tr>
                            <th>待遇要求</th>
                            <td><input name="Salary" type="text" class="form_text" id="Salary"></td>
                        </tr>
                        <tr>
                            <th>详细介绍</th>
                                <td><textarea name="Detail" class="form_textarea" id="Detail">
                                </textarea>
                                </td>
                        </tr>
                        <tr>
                            <th>验证码
                                <span class="required">*</span>
                            </th>
                            <td>
                                <input id="verifycode" class="form_text_verifycode" name="verifycode" type="text" maxlength="4">
                                <img src="/public/ResumeCode" onclick="ChangeResumeCode()" class="code_image" id="ResumeCode" align="absMiddle" alt="重新获取验证码" title="重新获取验证码">
                            </td>
                            </tr>
                        <tr>
                            <td colspan="2" class="operation">
                            <input class="form_button btn" type="submit" name="submit8" value="投递简历">
                            </td>
                        </tr>
                            <input type="hidden" name="__hash__" value="f3e72cd6bbe62c8348042629ee530510_18a666b01d6cdb66f76901d5a5c53383">
                </tbody>
            </table>
        <div class="page"></div>
    </div>
<div class="right_bottom1"></div></div>
</template>

<script>
export default {
    data(){
        return{ 
            resume:''
        }
    },
    methods:{
        
    },
    mounted(){
        this.resume = this.$route.params.name;        
        console.log(this.resume)
    }
}   
</script>

<style scoped>
#right{ float: none;margin: 0 auto; }
/*应聘*/
table.resume_table { margin:3px; text-align:center; width:97%; border-collapse:collapse;}
table.resume_table th{ font-weight:bold; text-align:left; width:100px;color:#000;}
table.resume_table td{text-align:left; }
table.resume_table .operation{text-align:center; }
table.resume_table #Detail{ height:200px;}
</style>
