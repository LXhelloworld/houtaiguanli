<template>
  <div class="container">
    <el-menu
      background-color="#374550"
      text-color="#d4d4d4"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-shop" />
          <span>商品</span>
        </template>
        <el-menu-item index="/b">所有商品</el-menu-item>
        <el-menu-item>已上架商品</el-menu-item>
        <el-menu-item>未上架商品</el-menu-item>
        <el-menu-item>缺货商品</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <template slot="title">
          <i class="el-icon-s-custom" />
          <span>用户</span>
        </template>
      </el-menu-item>
      <el-submenu  index="3">
        <template slot="title">
          <i class="el-icon-s-order" />
          <span>订单</span>
        </template>
        <el-menu-item index="/a">所有订单</el-menu-item>
        <el-menu-item>已完成订单</el-menu-item>
        <el-menu-item>被取消订单</el-menu-item>
        <el-menu-item>待支付商品</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-data" />
          <span>数据</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 800px;
    background-color: #374550;
  }
  a {
    text-decoration: none;
    background-color: #d4d4d4;
  }

</style>
