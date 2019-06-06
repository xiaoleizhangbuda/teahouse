<template>
    <div>
      <header>
        <router-link to="">未完成</router-link>
        <router-link to="/CompleteOrder">已完成</router-link>
      </header>
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "MyOrder"
    }
</script>

<style scoped>
header{
  height: .45rem;
  display: flex;
  background: #fff;
  align-items: center;
}
  header a{
    flex: 1;
    text-align: center;
  }
.router-link-active{
  color: #30C27B;
}
</style>
