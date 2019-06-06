<template>
  <div class="my-content">
    <div class="top">
      <div class="userMsg">
        <a href=""><img src="/static/images/my/user.jpg" alt=""></a>
        <a href="" class="msg">
          <span>小可爱</span>
          <span>18143753144</span>
        </a>
      </div>
      <div class="my-nav">
        <a href="">
          <img src="/static/images/my/huiyuan.png" alt="">
          <span>会员</span>
        </a>
        <router-link to="/MyOrder">
          <img src="/static/images/my/dingdan.png" alt="">
          <span>订单</span>
        </router-link>
        <a href="">
          <img src="/static/images/my/yajin.png" alt="">
          <span>押金</span>
        </a>
        <a href="">
          <img src="/static/images/my/dizhi.png" alt="">
          <span>地址</span>
        </a>
      </div>
    </div>
    <ul class="my-list">
      <li>
        <span>我的收藏</span>
        <a href="">
          <img src="/static/images/my/jiantou.png" alt="">
        </a>
      </li>
      <li>
        <span>联系客服</span>
        <a href="">
          <img src="/static/images/my/jiantou.png" alt="">
        </a>
      </li>
      <li>
        <span>用户协议</span>
        <router-link to="/Agreement">
          <img src="/static/images/my/jiantou.png" alt="">
        </router-link>
      </li>
      <li>
        <span>关于我们</span>
        <router-link to="/AboutUs">
          <img src="/static/images/my/jiantou.png" alt="">
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "my"
    }
</script>

<style scoped>
  .my-content{
    height: 100%;
    width: 100%;
  }
  .top{
    width: 100%;
    background: #fff;
    margin-bottom: .1rem;
  }
  .userMsg{
    display: flex;
    align-items: center;
    padding: .15rem;

  }
  .userMsg a:first-child{
    width: .65rem;
    height: .65rem;
    margin: .15rem;

  }
  .userMsg img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  .msg{
    display: flex;
    flex-direction: column;
  }
  .msg span:first-child{
    font-size: .18rem;
    font-weight: bold;
    line-height: .3rem;
  }
  .msg span:last-child{
    line-height: .3rem;
  }
  .my-nav{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: .15rem;
    box-shadow: 5px 5px 5px #eee;

  }
  .my-nav a{
    width: 25%;
  }
  .my-nav a img{
    display: block;
    height: .25rem;
    margin: .05rem auto;
  }
  .my-nav a span{
    display: block;
    text-align: center;
    font-size: 12px;
  }
  .my-list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .43rem;
    margin-bottom: .02rem;
    background: #fff;
    padding: 0 .15rem;
  }
  .my-list a img{
    height: .14rem;
  }
</style>
