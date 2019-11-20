<template>
  <div id="login">
      <div class="login-content">
           <p class="box">登录框</p>
           <el-form :model="loginForm" ref="loginForm" :rules="rules">
              <el-form-item prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-service" placeholder="输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-view" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="btn" @click="submitForm('loginForm')">登录</el-button>
              </el-form-item>
            </el-form>

      </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
   data() {
     return {
       loginForm:{
         username:"",
         password:""
       },
       rules:{
         username:[
             { required: true, message: '请输入用户名', trigger: 'blur' },
             { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
         ],
         password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
         ]
       }
     }
   },
   methods: {
     ...mapActions([
       'getLogin'
     ]),
     submitForm(loginForm){

        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

        this.$refs[loginForm].validate((valid) => {
          if (valid) {
               //发请求提交数据
               var params = {obj:this.loginForm,callback:()=>{
                  loading.close();
                  this.$router.replace("/home")
               }}
               this.getLogin(params) 

             // this.$store.dispatch('getLogin',this.loginForm)
            } else {
              this.$message.error('表单输入有误！');
              return false;
            }
          });


     }
   },
}
</script>
<style lang="less">
    #login{
       display: flex;
       justify-content: center;
       .box{
              
          font-size: 30px;
          text-align: center

       }
    }
   
   #login .login-content{
       margin-top: 100px;
       height: 300px;
       width: 400px;
       background-color: #11c81fb0;
       padding: 20px 40px;
   }
</style>