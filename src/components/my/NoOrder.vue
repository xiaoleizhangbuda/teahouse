<template>
  <div class="order">
    <div class="noOrder">
      <img src="/static/images/my/zanwudingdan@2x.png" alt="">
      <p>亲，您还没有订单哦~</p>
    </div>
    <div class="order-list">
      <p class="top">
        <a href="javaScript:;">
          <span>订单剩余时间</span>
          <span>24小时32分56秒</span>
        </a>
        <a href="javaScript:;">
          <span>开门码</span>
          <span>569845</span>
        </a>
      </p>
      <div  class="mid">
        <div class="mid-left">
          <img src="/static/images/my/user.jpg" alt="">
          <a href="javaScript:;">
            <span>广益路街店</span>
            <span>￥650</span>
            <span>押金：￥199</span>
          </a>
        </div>
        <span class="count">x1</span>
      </div>
      <p class="down">
        <a href="javaScript:;">
          <span>实际支付 </span>
          <span>￥849</span>
        </a>
        <a href="javaScript:;">
          <span>取消订单</span>
          <span>续约</span>
        </a>
      </p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "NoOrder"
    }
</script>

<style scoped>
  .order{
    overflow-y: auto;
  }
  .noOrder{
    display: none;
  }
  .noOrder img{
    display: block;
    height: 1.17rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .noOrder p{
    color: #999;
    text-align: center;
    line-height: .25rem;
  }
  .order-list{
    width: 95%;
    margin: .1rem auto;
    background: #fff;
    border-radius: .05rem;
    box-shadow:0px 0px 5px #eee;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem .15rem;
    border-bottom: 1px solid #eee;
  }
  .top span:last-child{
    color: #30C27B;;
  }
  .mid{
    display: flex;
    justify-content: space-between;
    padding: .1rem .15rem;
  }
  .mid img{
    width: .9rem;
    height: .9rem;
  }
  .mid-left{
    display: flex;
  }
  .mid a{
    display: flex;
    flex-direction: column;
    padding: .15rem;
    justify-content: center;
  }
  .mid .count{
      display: flex;
    align-items: center;
    color: #808080;
  }
  .mid-left a span:nth-child(2){
    color: #F41515;
    font-weight: bold;
    line-height: .25rem;
  }
  .mid-left a span:last-child{
    font-size: 12px;
  }
  .down{
    display: flex;
    justify-content: space-between;
    padding: .1rem .15rem;
  }
  .down a:first-child span:first-child{
    font-weight: bold;
  }
  .down a:first-child span:last-child{
    color: #F41515;
    font-weight: bold;
  }
  .down a:last-child span:first-child{
      width: .78rem;
      border: 1px solid #30C27B;
      font-size: 12px;
      display: inline-block;
      line-height: .28rem;
      text-align: center;
      color: #30C27B;
      border-radius: .05rem;
  }
  .down a:last-child span:last-child{
    width: .6rem;
    font-size: 12px;
    display: inline-block;
    line-height: .3rem;
    text-align: center;
    background: #30C27B;
    color: #fff;
    border-radius: .05rem;
    margin-left: .1rem;
  }
</style>
