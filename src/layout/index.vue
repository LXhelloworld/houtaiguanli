<template>
  <el-container>
    <el-header>
      <nav-header></nav-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar></sidebar>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavHeader from "./NavHeader";
  import AppMain from "./AppMain";
  import Sidebar from "./Sidebar";
  import NavBar from "./NavBar";
    export default {
      name: "index",
      components:{
        NavHeader,
        Sidebar,
        AppMain,
        NavBar
      }
    }
</script>

<style scoped>
  .el-header{
    padding: 0;
    height: 45px !important;
  }
  .el-main{
    padding: 0;
  }
</style>
