<template>
    <!-- <div>
        <div class="big">
            <div class="item">
                <span>账号</span>
                <el-input v-model="acc" />
            </div>
            <div class="item">
                <span>密码</span>
                <el-input type="password" v-model="pwd" />
            </div>
            <div class="item">
                <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div> -->
    <div class="box">
    <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
      <h3 class="login_title">后台登录</h3>
 
        <el-form-item label="用户名" prop="userName">
            <el-input v-model="acc" placeholder="请输入账号"></el-input>
        </el-form-item>
 
        <el-form-item label="密码" prop="password">
            <el-input show-password v-model="pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
 
        <el-form-item>
            <el-button @click="login" class="login_button" type="primary"> 登 录 </el-button>
        </el-form-item>
 
 
    </el-form>
  </div>
</template>
<script>
import Msg from "@/utils/msg/msg"
export default {
   data() {
      return {
        acc:'',
        pwd:''
   
      }
   },
   methods:{
    login(){
        if(this.acc == 'admin' && this.pwd == 'admin'){
            Msg.success('登录成功')
            this.$router.push('/home')
        }else{
            Msg.fail('账号密码不正确！')
        }
    }
   },
}
</script>
<style  scoped>
/* .item{
    display: flex;
    justify-content: space-between;
}
.big{
    width: 500px;
} */
.login-container {
  width: 700px;
  height: 400px;
  border:1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  background-color: #ffffff;
  box-sizing: border-box;
}
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    /* width: 198px; */
    width: 500px;
    height: 60px;
  }
  .login_button {
    margin-left: 280px;
    margin-top: 10px;
  }
  .login_register {
    width: 70px;
    height: 40px;
    text-align: center;
    margin-top: 10px;
  }

</style>
