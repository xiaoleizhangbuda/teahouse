<template>
    <div class="index-footer">
        <router-link to="/">
            <img src="/static/images/shouye/shouye_xuanzhong.png" alt="">
            <span>茶馆</span>
        </router-link>
        <router-link to="/Shopping">
          <img src="/static/images/shouye/shangcheng_weixuanhzong.png" alt="">
          <span>商城</span>
        </router-link>
        <router-link to="/my">
          <img src="/static/images/shouye/wode_weixuanhzong.png" alt="">
          <span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "indexFooter",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.index-footer{
  display: flex;
  height: .5rem;
}
.index-footer a{
  width: 33.33%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.index-footer img{
  width: .2rem;
}
.index-footer span{
  font-size: .14rem;
  text-align: center;
  line-height: .25rem;
}
</style>
