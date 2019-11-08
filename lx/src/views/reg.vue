 <template>
   <div id="right">
       <div class="right_title">
           <!--当前位置 开始-->
           <div id="location">
               <b>当前位置：</b>
               <a href="/" target="_self">网站首页</a>
               &nbsp;&gt;&gt;&nbsp;
               <a href="#" target="_self">用户注册</a>
            </div><!--当前位置 结束-->
            <h2>
                <img src="../assets/titleleftbg.png" align="absmiddle">
                用户注册
                <img src="../assets/titleleftbg.png" align="absmiddle">
            </h2>
        </div>
        <div class="right_body">
            <table class="reg_table">
                <tbody>
                    <tr>
                        <th>手机号码</th>
                        <td colspan="2">
                            <input class="form_text" id="Member" name="MemberEmail" type="text" v-model="phone" @change="getphone">
                        </td>
                        <td>
                            <!-- 验证消息 -->
                            <span style="color:red">{{phoneText}}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>用户名</th>
                        <td colspan="2">
                            <input class="form_text" id="Member" name="MemberEmail" type="text" v-model="uname" @change="getuname">
                        </td>
                        <td>
                            <!-- 验证消息 -->
                            <span style="color:red">{{unameText}}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>密码</th>
                        <td colspan="2">
                            <input class="form_text" id="Member" name="MemberPassword" type="password" v-model="upwd" @change="getupwd">
                        </td>
                         <td>
                            <!-- 验证消息 -->
                            <span style="color:red">{{upwdText}}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>确认密码</th>
                        <td colspan="2">
                            <input class="form_text" id="Member" name="MemberPassword1" type="password" v-model="upwd2" @change="getupwd2">
                        </td>
                         <td>
                            <!-- 验证消息 -->
                            <span style="color:red">{{upwd2Text}}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="operation" colspan="2">
                            <button class=" btn btn-small" v-on:click="reg">注册</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <div class="right_bottom"></div></div>
 </template>
 
 <script>
 export default {
     data(){
         return{
            phone:"",
            uname:"",
            upwd:"",
            upwd2:"",
            phoneText:"请输入手机号",
            unameText:"请输入2~12位的字符",
            upwdText:"请输入8~12位的数字和字母",
            upwd2Text:"确认密码"
         }
     },
     methods:{
        getphone(){
    var reg2 = /^1(3|4|5|7|8)\d{9}$/
        if(!reg2.test(this.phone)){
          this.phoneText="手机号各式不正确"
          return;
      }else{
          this.phoneText=""
      }
        },
        getuname(){
    var reg = /^[a-z0-9_\u4e00-\u9fa5]{2,12}$/i
        if(!reg.test(this.uname)){
           this.unameText="用户格式不正确"
           return;
       }else{
           this.unameText=""
       }
        },
        getupwd(){
            var reg3 = /^[A-z0-9]{8,16}$/i
        if(!reg3.test(this.upwd)){
           this.upwdText="密码格式不正确"
           return;
       }else{
           this.upwdText=""
       }
        },
        getupwd2(){
            if(this.upwd2==this.upwd){
                this.upwd2Text=""
                return;
            }else{
                this.upwd2Text="密码不一致"
            }
        },
             reg(){    
      if (this.uname === '' || this.upwd === '' || this.phone === "") {
          alert('请输入手机号、用户名、密码')
        return;
      }
    // 发送ajax请求
    var url = "reg";
    var obj = {uname:this.uname,upwd:this.upwd,phone:this.phone};
        this.axios.get(url,{params:obj}).then(
                result=>{
                        console.log(result);
                // 1.判断服务返回结果
                // 2.code:>0跳转default组件
                if(result.data.code>0){
                        this.$router.push("/login")
                    alert("注册成功")
                }else{
                        alert("注册失败")
                }
            }
        )
        },
     }
 }
 </script>
 
 <style>
 #right{ float: none;margin: 0 auto; }
/*会员注册*/
table.reg_table{ width:60%; text-align:center;margin-left:30%;}
table.reg_table th{ width:10%; text-align:left; font-weight:bold;}
table.reg_table td{  text-align:left; }
table.reg_table .operation{text-align:center}
table.reg_table .MemberCode{  text-align:left; width:70px;}
table.reg_table #SmsCode{width:50px;}
table.reg_table tbody tr td:first-child{width:50%;}
table.reg_table tbody tr td:last-child{width:40%;}
span{color: grey;}
#Member{width: 90%;}
 </style>