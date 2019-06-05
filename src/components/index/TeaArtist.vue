<template>
    <ul class="artist">
        <li v-for="i in 4">
            <img src="/static/images/shouye/shangcheng_weixuanhzong@2x.png" alt="">
            <div class="dsr-msg">
                <a>
                  <span>茶艺师：蒋媛媛</span>
                  <span>工作经验：2年</span>
                </a>
                <router-link to="/">预约</router-link>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TeaArtist"
    }
</script>

<style scoped>
.artist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .15rem;
}
  .artist li{
    width: 1.65rem;
    border-radius: .1rem;
    background: #fff;
    margin-bottom: .15rem;
  }
.artist li img{
  width: 100%;
}
  .dsr-msg{
    display: flex;
    justify-content: space-between;
    padding: .1rem;
    align-items: center;
  }
.dsr-msg a:first-child{
  display: flex;
  flex-direction: column;
}
.dsr-msg a:last-child{
  width: .4rem;
  background: #30C27B;
  color:#fff;
  text-align: center;
  line-height: .2rem;
  font-size: .12rem;
  border-radius: .03rem;
}
</style>
