<template>
  <div class="order">
    <div class="order-list">
      <p class="top">
          订单已结束
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
          <span>评价</span>
        </a>
      </p>
    </div>
  </div>

</template>


<script>
    export default {
        name: "CompleteOrder"
    }
</script>

<style scoped>
  .order{
    overflow-y: auto;
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
    align-items: center;
    padding: .1rem .15rem;
    border-bottom: 1px solid #eee;
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
    border-top: 1px solid #eee;
  }
  .down a:first-child span:first-child{
    font-weight: bold;
  }
  .down a:first-child span:last-child{
    color: #F41515;
    font-weight: bold;
  }
  .down a:first-child{
    line-height: .3rem;
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
