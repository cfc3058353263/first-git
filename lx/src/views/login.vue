<template>
<div id="right">
        <div class="right_title">
            <!--当前位置 开始-->
            <div id="location">
                <b>当前位置：</b>
                <a href="/" target="_self">网站首页</a>
                &nbsp;&gt;&gt;&nbsp;
                <a href="#" target="_self">用户登录</a>
            </div>
              <!--当前位置 结束-->
                <h2>
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                    用户登录
                    <img src="../assets/titleleftbg.png" align="absmiddle">
                </h2>
        </div>
        <!-- <div class="right_body">
            <form enctype="multipart/form-data" id="frmLogin" method="post" action="/public/checkLogin"><table class="login_table">
                <tbody>
                    <tr>
                        <th>用户名</th>
                        <td>
                            <input name="MemberName" type="text" class="form_text" placeholder="用户名 / 电子邮件 / 手机">
                        </td>
                    </tr>
                    <tr>
                        <th>密码</th>
                        <td>
                            <input class="form_text" name="MemberPassword" type="password">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <b>验证码</b>
                        </th>
                        <td>
                            <input name="MemberCode" type="text" class="form_text_verifycode" maxlength="4">
                            &nbsp;
                            <img class="code_image" id="MemberCode" title="重新获取验证码" src="/public/memberCode/" align="absMiddle">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="operation">
                            <input class="form_button btn btn-small" type="submit" name="submit8" value="登录"> 
                            &nbsp;<a href="/public/reg/l/cn" target="_self">我要注册</a>&nbsp;
                            <a href="/public/forget/l/cn" target="_self">忘记密码</a>
                        </td>
                    </tr>

                </tbody>
            </table>
            <input type="hidden" name="__hash__" value="69833ba7b752ac87ae8bce36f3209450_fd9f9b71f5ac4d2f712e4fb74f853a24">
            </form>
        </div> -->
        <div>
    <div class="login-wrap" v-show="showLogin">
      <p v-show="showTishi">{{tishi}}</p>
      <!-- 双向绑定 -->
      <input type="text" :placeholder="unameHolder" v-model="uname">
      <input type="password" :placeholder="upwdHolder" v-model="upwd">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>
  </div>
    <div class="right_bottom"></div>
</div>
</template>

<script>
export default {
    data() {
    return {
      unameHolder:"请输入用户名",
      upwdHolder:"请输入密码",

      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      uname: '',
      upwd: '',
      newUsername: '',
      newPassword: ''
    }
  },
  methods: {
   login() {
    //1.获取用户名和密码
    var u = this.uname;
    var p = this.upwd;
    console.log(u,p)
    // 2.创建一个正则表达式字母数字下换线3~12
    var reg = /^[a-z0-9_]{3,12}$/i
    // 3.：验证用户名 出错提示
      if (this.uname === '' || this.upwd === '') {
          alert('请输入用户名或密码')
        return;
      }
       if(!reg.test(u)){
           alert("用户格式不正确")
           return;
       }
    // 4.验证密码 出错提示
        if(!reg.test(p)){
            alert("密码格式不正确")
             return;
        }
    // 5.发送ajax请求
    var url = "login";
    var obj = {uname:u,upwd:p};
        this.axios.get(url,{params:obj}).then(
            result=>{
                console.log(result);
                //1.判断服务返回结果
                //2.code:>0跳转default组件
                if(result.data.code>0){
                    this.$router.push("/default")
                    alert("登录成功")
                }else{
                    alert("用户名和密码有误")
                }
            }
        )
    },
    ToRegister(){
          /* 跳转登录 */
           this.$router.push('/reg')     
    },
  }
}
</script>
    
<style scoped>
#right{ float: none;margin: 0 auto; }
/*会员登录*/

.login-wrap { text-align: center;}
input {display: block; width: 250px; height: 40px; line-height: 40px; margin: 0 auto;margin-bottom: 10px;outline: none; border: 1px solid #888;padding: 10px;box-sizing: border-box;}
p {color: red;}
button {display: block;width: 250px; height: 40px;line-height: 40px; margin: 0 auto; border: none; background-color: #41b883;color: #fff;font-size: 16px;margin-bottom: 5px;}
span {cursor: pointer;}
span:hover { color: #41b883;}
</style>