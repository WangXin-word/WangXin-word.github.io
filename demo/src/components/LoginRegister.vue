<template>
<div id="box">
    <div class="container ">
        <img src="../assets/logo.jpg" alt="" style="width:120px" class="pt-4 img-fluid rounded-circle mx-auto d-block ">
    </div>
    <div class="container">
        <div class="row">
            <ul class="nav nav-tabs col-12 d-flex justify-content-center pt-4" id="myTab" role="tablist">
                <li class="nav-item col-5 text-center">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">登陆</a>
                </li>
                <li class="nav-item col-5 text-center">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">注册</a>
                </li>
             </ul>
             <div class="container pt-4">
             <div class="rwo">
            <div class="tab-content" id="myTabContent">
                <!-- 登陆 -->
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <form class="text-success">
                        <div class="form-group">
                            <label for="exampleInputEmail1">UserName</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <!-- 注册 -->
                <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                   <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <form class="text-success">
                        <div class="form-group">
                            <label for="exampleInputEmail1">UserName</label>
                            <input v-model="username" type="text" class="form-control" id="exampleInputEmail1">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input v-model="password" type="password" class="form-control" id="exampleInputPassword2">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">ConfirmPwd</label>
                            <input  v-model="rePassword" type="password" class="form-control" id="exampleInputPassword3">
                        </div>
                         <div class="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input v-model="Phone" type="text" class="form-control" id="exampleInputEmail1">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input  v-model="email" type="email" class="form-control" id="exampleInputPassword4">
                        </div>
                        <button type="submit" class="btn btn-primary" v-on:click=userRegister()>Submit</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
    data(){
        return{
            // username:'',
            // Password:'',
            username:'',
            password:'',
            rePassword:'',
            Phone:'',
            email:'',
        }
    },
    methods:{
        //注册方法
        userRegister:function(event){
            if(this.password!=this.rePassword){
                alert("两次密码不一致")
            }else{
                let sendDate={
                    username:this.username,
                    password:this.password,
                    userPhone:this.Phone,
                    userMail:this.email,
                }
                this.$http.post('http://localhost:3000/users/register',sendDate).then((data)=>{
                     if(data.body.status==1){
                        alert(data.body.message)
                    }else{
                        alert(data.body.message)
                        this.$router.go(-1)
                    }
                })
            }
        },
        // userLogin:function(event){
        //     this.$http.post('http://localhost:3000/users/login',{username:this.userame,password:this.password}).then(data=>{
        //         if(data.body.status==1){
        //             alert(data.body.message)
        //         }else{
        //             this.$router.go(-1)
        //         }
        //     })
        // }
    }
}
</script>

<style scoped>
#box{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/bgc.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
#box .img1{
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.3;
}
.container .row{
    /* background-color: red; */
    opacity: 1;
}
</style>