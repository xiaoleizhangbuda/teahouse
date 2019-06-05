<template>
  <div class="list">
    <div class="search" >
      <a href="">
        <img src="/static/images/shouye/定位.png" alt="">
        <span>当前位置：西安市</span>
      </a>
      <a href="">
        <img src="/static/images/shouye/home_search.png" alt="">
        <span>查询</span>
      </a>
    </div>
    <div class="s-list" v-for="i in 10">
      <div class="shopImg">
        <img src="/static/images/shouye/yuyue.png" alt="">
        <div class="title">
          <p>广益路街店</p>
          <a href="">
            <span>38	M²/可容纳15人</span>
            <span>¥80/小时</span>
          </a>
        </div>
      </div>
      <div class="s-nav">
        <router-link to="/MakeAppointment">
          <img src="/static/images/shouye/yuyue.png" alt="">
          <span>预约</span>
        </router-link>
        <a href="#">
          <img src="/static/images/shouye/dingwei.png" alt="">
          <span>导航</span>
        </a>
        <a href="#">
          <img src="/static/images/shouye/shijing.png" alt="">
          <span>实景</span>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "ShopList"
    }
</script>

<style scoped>
  .list{
    flex: 1;
    overflow-y: auto;
  }
  .search{
    width: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .3rem;
  }
  .search a{
    padding: 0 .1rem;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .search img{
    width: .15rem;
    margin-right: .1rem;
  }
  .s-list{
    width: 100%;
    margin: 0 auto;
    border-bottom: .5px solid #ccc;
    margin-top: .1rem;
  }

.shopImg{
  width: 95%;
  margin: 0 auto;
  height: 1.5rem;
  background: #11c9ff;
  position: relative;
}
  .title{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: .5rem;
    background: rgba(0,0,0,.3);
    color: #fff;
  }
  .title a{
    display: flex;
    justify-content: space-between;
    padding: 0 .1rem;
    color: #fff;
  }
  .title p{
    text-align: left;
    padding-left: .1rem;
    line-height: .25rem;
  }
  .s-nav{
    display: flex;
    height: .5rem;
    align-items: center;
  }
  .s-nav a{
    width: 33.33%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .s-nav a img{
    height: .15rem;
    margin-right: .1rem;
  }
</style>
