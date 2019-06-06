<template>
  <div class="">
    <div class="tankuang" v-show="sign">
      <div class="select">
        <a href="">呼叫</a>
        <a href="">复制</a>
      </div>
    </div>
    <div class="lbt"></div>
    <ul class="yy-list">
      <li>
        <div class="shopName">
          <a href="">广益路街店</a>
          <a href=""><span class="price">90</span>元/小时</a>
        </div>
        <div class="people">
          <a href="">可容纳:<span>15</span>人</a>
          <a href=""><span>24</span>人预约</a>
        </div>
      </li>
      <li class="y-time">
        <a href="">营业时间: 00:00-23:59</a>
        <div class="icon">
          <a href="javaScript:;">
            <img src="/static/images/shouye/dingwei.png" alt="">
          </a>
          <a href="javaScript:;">
            <img src="/static/images/shouye/dianhua.png" alt="" @click="isTips">
          </a>
        </div>
      </li>
      <li class="yuyue">
        <div class="yuyue-time">
          预约时间：(<span>00:00-00:00</span>)
        </div>
        <div class="hours">
          <span><em>0</em>小时</span>
          <a href=""><img src="/static/images/shouye/right.png" alt=""></a>
        </div>
      </li>
      <li class="yl">
        <span>茶馆押金</span>
        <a href="">￥
          <span>199</span>
        </a>
      </li>
      <li class="yl">
        <span>邮寄发票</span>
        <router-link to="/MailInvoice">
          <img src="/static/images/shouye/right.png" alt="">
        </router-link>
      </li>
      <li class="yl">
        <span>预约茶艺师</span>
        <router-link to="/TeaArtist">
          <img src="/static/images/shouye/right.png" alt="">
        </router-link>
      </li>
      <li class="sum">
        <a href="#">合计：<span>￥199</span></a>
      </li>
      <li class="y-btn">预约</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MakeAppointment",
    data(){
      return{
        sign:false
      }
    },
    methods:{
      isTips(){
        this.sign=!this.sign;
      }
    }
  }
</script>

<style scoped>
  .lbt{
    width: 100%;
    height: 1.59rem;
    background: #30C27B;
  }
  .yy-list{
    width: 100%;
  }
  .yy-list li{
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.1rem .15rem;
  }
  .yy-list li:first-child{
    height: .35rem;
    margin-bottom: .02rem;
    flex-direction: column;
  }
  .yy-list li:first-child>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height:.18rem ;
    width: 100%;
  }
  .shopName a:first-child{
    font-size: .15rem;
    font-weight: bold;
    font-family: 'PingFang-SC-Bold';
  }
  .price{
    color: #F41515;
    font-size: .18rem;
  }
  .people{
    margin-top: .05rem;
  }
  .people a{
    color: #808080;
    font-size: .12rem;
    font-family: 'PingFang-SC-Medium';
  }
  .y-time{
    display: flex;
    justify-content: space-between;
  }
  .icon img{
    height: .15rem;
    margin-left: .1rem;
  }
  .yuyue{
    margin: .1rem 0;
  }
  .yuyue-time span{
    color: #B3B3B3;
  }
  .hours span{
    height: .25rem;
    width: .5rem;
    background: #30C27B;
    color: #fff;
    border-radius: .03rem;
    display: inline-block;
    text-align: center;
    line-height: .25rem;
  }
  .hours img{
    width: .14rem;
  }
  .yl{
    margin-bottom: .02rem;
  }
  .yl img{
    width: .14rem;
  }
  .sum{
    margin-top: .1rem;
  }
  .sum span{
    color: #F41515;
  }
  .sum a{
    position: relative;
    right:-2.6rem;
  }
  .yy-list .y-btn{
    background: #30C27B;
    color: #fff;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .tankuang{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 1;
  }
  .select{
    display: flex;
    position: absolute;
    flex-direction: column;
    left:50%;
    top: 50%;
    margin-left:-1.5rem;
    margin-top: -.45rem;
    width: 3.0rem;
    height: .9rem;
    background: #fff;
    border-radius: .05rem;
    z-index: 2;
  }
  .select a{
    flex: 1;
    align-items: center;
    color: #1A1919;
    line-height: .45rem;
    padding-left: .15rem;

  }
  .select a:first-child{
    border-bottom: .5px solid #E6E6E6 ;
  }
</style>
