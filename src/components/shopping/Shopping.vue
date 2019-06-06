<template>
<div class="shop-content">
  <div class="mask" v-show="isHidden">

  </div>
  <div class="header">
      <p class="select">
        <img src="/static/images/shopping/home_search.png" alt="" >
        <input type="text" placeholder="搜索商品" >
      </p>
      <ul class="s-nav">
          <li>
            <span>茶具</span>
            <img src="/static/images/shopping/jiantou.png" alt="" @click="down">
          </li>
          <li>
            <span>茶叶</span>
            <img src="/static/images/shopping/jiantou.png" alt="" @click="down">
          </li>
          <li>
            <span>茶点</span>
            <img src="/static/images/shopping/jiantou.png" alt="" @click="down">
          </li>
        <li class="drop-down" v-show="isHidden">
          <span>全部</span>
          <span>茶壶</span>
          <span>套装</span>
          <span>茶碗</span>
        </li>
      </ul>
  </div>
  <div class="tea-list">
    <a href="" v-for="i in 4">
      <img src="/static/images/shopping/1.jpg" alt="">
      <span class="txt">陶瓷茶具茶杯陶瓷茶具茶杯陶瓷茶具茶杯陶瓷茶具茶杯</span>
      <span class="price">￥99.00</span>
    </a>
  </div>

</div>
</template>

<script>
    export default {
        name: "Shopping",
        data(){
            return{
              isHidden:false
            }
        },
        methods:{
         down(){
           this.isHidden=!this.isHidden;
         }
        }
    }
</script>

<style scoped>
  .shop-content{
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  .mask{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
  }
  .header{
    background: #fff;
    position: relative;
    z-index: 2;
  }
  .select {
    position: relative;
    padding: .1rem  .15rem;

  }
  .select img{
    width: .15rem;
    position: absolute;
    left: 37%;
    top: 36%;
  }
  .select input{
    width: 100%;
    line-height: .35rem;
    margin: 0 auto;
    text-align: center;
    background: #F5F5F5;
    border-radius: .05rem;
    color: #B3B3B3;
    border: none;
    outline: none;
  }
.s-nav{
  display: flex;
  align-items: center;
  height: .45rem;
  position: relative;
  width: 100%;
}
  .s-nav li{
    width: 33.33%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .s-nav img{
    width: .14rem;
    margin-left: .1rem;
  }
  .s-nav .drop-down{
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    left: 0;
    top: .45rem;
    background: #fff;
    justify-content: center;
    border-top: 1px solid #eee;
    z-index: 3;
  }
  .drop-down span{
    height: .5rem;
    width: 100%;
    line-height: .5rem;
  }
  .drop-down span:hover{
    background: #F5F5F5;
  }
  .tea-list{
    display: flex;
    align-items: center;
    padding: .1rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tea-list a{
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 1.73rem;
    overflow: hidden;
    border-radius: .05rem;
    box-shadow: 0 0 0 .02rem #eee;
    margin-bottom: .1rem;
  }
  .tea-list a img{
    width: 100%;
  }
  .tea-list span{
    padding: 0 .1rem;

  }
  .tea-list .txt{
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: .2rem;
    padding-top: .05rem;
  }
  .tea-list .price{
    text-align: right;
    color: #F41515;
    padding-right: .25rem;
    padding-bottom: .05rem;
  }
</style>
