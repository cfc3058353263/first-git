<template>
  <div id="right">
      <div class="right_title1">
          <!--当前位置 开始-->
            <div id="location">
              <b>当前位置：</b>
              <a href="/" target="_self">网站首页</a>
              &nbsp;&gt;&gt;&nbsp;
              <a href="/guestbook.html" target="_self">
              在线留言
              </a>
            </div>
              <!--当前位置 结束-->
            <h2>
                <img src="../assets/titleleftbg.png" align="absmiddle">
                    在线留言
                <img src="../assets/titleleftbg.png" align="absmiddle">
            </h2>
        </div>
        <div class="right_body1">
            <ul class="guestbooklist">暂无信息</ul>
                <div class="page"></div>
                <div class="clear"></div>
                <div class="message_title">
                    我要留言
                </div>
                <div class="message_body">
                    <table class="guestbook_table">
                        <form enctype="multipart/form-data" method="post" id="frmGuestBook" action="/channel/guestbookadd/l/cn">
                        </form>
                        <tbody>
                            <tr>
                                <th>标题
                                    <span class="required">*</span>
                                </th>
                                <td>
                                    <input id="MessageTitle" name="MessageTitle" type="text" class="form_text" maxlength="100" value="">
                                </td>
                            </tr>
                            <tr>
                                <th>内容</th>
                                <td>
                                    <textarea id="MessageContent" name="MessageContent" class="form_textarea">
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>姓名</th>
                                <td>
                                    <input id="GuestName" name="GuestName" type="text" class="form_text" maxlength="100" value="">
                                </td>
                            </tr>
                            <tr>
                                <th>电话</th>
                                <td>
                                    <input id="Contact" name="Contact" type="text" class="form_text" maxlength="100" value="">
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    验证码
                                    <span class="required">*</span>
                                </th>
                                <td>
                                <input id="verifycode" class="form_text_verifycode" name="verifycode" type="text" maxlength="4">
                                <img src="/public/guestbookCode/" onclick="ChangeCode()" class="code_image" id="code" align="absMiddle" alt="重新获取验证码" title="重新获取验证码">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="operation"><input class="form_button btn" type="submit" name="submit8" value="提交">
                                </td>
                            </tr>
                            <input type="hidden" name="__hash__" value="a3444acae5ab243e23a5cdf5f330be16_f55ef7fae6fcbb0c5bdce017a36f546a">
                        </tbody>
                    </table>
                </div>
            </div>
        <div class="right_bottom1"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#right{ float: none;margin: 0 auto; }

.guestbooklist li{ padding:10px; border:1px solid #CCC; margin-bottom:10px; }
.MessageTitle { color:#227BAD; line-height:1.5em; font-weight:bold;}
.MessageContent { padding:5px; margin-bottom:10px; }
table.guestbook_table{ width:98%;  }
table.guestbook_table th{ width:100px; text-align:left}
table.guestbook_table td{ text-align:left}
table.guestbook_table .operation{ text-align:center }
</style>