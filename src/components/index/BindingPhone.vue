<template>
    <div>
        <form>
            <p class="user"><input type="text" placeholder="输入手机号"/><span>获取验证码</span></p>
            <p class="paw"><input type="password" placeholder="输入密码"/></p>
            <p class="xieYi">
              <span @click="isCheck" :class="{active:check===true}"></span>
              <a href="#">同意《茶馆用户协议》</a>
            </p>
            <input class="btn" type="button" value="确定"/>
        </form>
    </div>
</template>

<script>
    export default {
        name: "BindingPhone",
        data(){
            return{
               check:false
            }
        },
        methods:{
          isCheck(){
              this.check=!this.check;
          }
        }
    }
</script>

<style scoped>
.user,.paw{
  height: .5rem;
  border-top: .5px solid #ccc;
  padding-left: .1rem;
  position: relative;
  background: white;
}
.user input,.paw input{
  border: none;
  height: 100%;
  font-size: .14rem;
  color: #ccc;
  outline: none;
}
.user span{
  display: inline-block;
  height: .25rem;
  width: .75rem;
  border-radius:.03rem ;
  border: .5px solid #30C27B;
  font-size: .12rem;
  line-height: .25rem;
  text-align: center;
  color: #30C27B;
  position: absolute;
  right: .1rem;
  top: 50%;
  margin-top: -.125rem;
}
  .xieYi{
    padding-left: .1rem;
    display: flex;
  }
.xieYi span{
  width: .15rem;
  height: .15rem;
  border-radius: 50%;
  border: .5px solid #ccc;
  margin-right: .1rem;
}
.xieYi a{

}
 .xieYi .active{
  background: url("../../../static/images/shouye/xuanzhong@2x.png") no-repeat center;
  background-size:.15rem ;
  border:.5px solid #30C27B ;
}

  .btn{
    display: block;
    margin: .6rem auto;
    width: 80%;
    height: .45rem;
    background: #30C27B;
    color: #fff;
    border: none;
    border-radius: .04rem;
    font-size: .15rem;
    outline: none;
  }
</style>
