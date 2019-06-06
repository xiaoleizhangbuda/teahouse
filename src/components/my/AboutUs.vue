<template>
    <div class="us">

      <div class="logo">
        <img src="/static/images/my/bj@2x.png" alt="">
        <span>LOGO</span>
      </div>
      <div class="service">
        二十四小时营业，您可以在这里约三五个好友喝茶、
        聊天、会议、洽谈,也可以一个人安静的工作、休息
        和静心，没有打扰，茶馆在这里等你!
      </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
.logo{
  width: 100%;
  position: relative;
}
  .logo img{
    width: 100%;
  }
  .logo span{
    display: block;
    width: .75rem;
    text-align: center;
    color: #fff;
    font-size: .17rem;
    line-height: .75rem;
    background: #30C27B;
    border-radius: .05rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -.38rem;
    margin-left: -.38rem;
  }
  .service{
    padding: .25rem .35rem;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    background: #fff;
    color: #3D4045;
    font-size: .13rem;
    margin-top: .06rem;
    line-height: .18rem;
  }
</style>
