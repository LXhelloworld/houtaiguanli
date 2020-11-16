<template>
  <div class="container">
    <div class="title">
      <h1>后台管理系统</h1>
    </div>
    <div class="user-info">
      <div class="user-img">
        <img src="" alt="">
      </div>
      <div>
        <div>昵称：利好</div>
        <div>权限：管理员</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 45px;
    background-color: #ff6868;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title>h1{
    margin-left: 20px;
  }
  .user-info{
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    margin-right: 20px;
  }
  .user-img{
    margin-right: 10px;
    width: 40px;
    height: 40px;
    background-color: grey;
  }
</style>
