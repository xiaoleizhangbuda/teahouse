<template>
  <div class="main">
    <RouterView/>
    <index-footer></index-footer>
  </div>
</template>
<script>
  import ShopList from "../index/ShopList"
  import indexFooter from "../common/indexFooter"
      export default {
          name: "index",
          components:{
              ShopList,
              indexFooter
          }
      }
</script>
<style scoped>
.main{
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>
