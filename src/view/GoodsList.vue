<template>
  <div>
    <el-container>
      <el-header height="10">
        <div class="goods-header">
          <div>
            <p>商品列表</p>
          </div>
          <div class="goods-search">
            <el-button size="mini" type="primary" icon="el-icon-circle-plus-outline" @click="addGood">添加商品</el-button>
            <input type="text" placeholder="请输入商品关键字">
            <el-button size="mini" round icon="el-icon-search">搜索</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-table
          :data="goodsList"
          border
          style="width:100%"
        >
          <el-table-column
            prop="upDate"
            label="上传日期"
            sortable
            width="150">
          </el-table-column>
          <el-table-column
            prop="imgUrl"
            label="图片"
            width="150">
          </el-table-column>
          <el-table-column
            prop="goodName"
            label="名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="goodType"
            label="种类"
            width="150">
          </el-table-column>
          <el-table-column
            prop="salePrice"
            label="出售价格"
            width="150">
          </el-table-column>
          <el-table-column
            prop="goodPrice"
            label="进价"
            width="150">
          </el-table-column>
          <el-table-column
            prop="saleNum"
            label="已售数量"
            width="150">
          </el-table-column>
          <el-table-column
            prop="total"
            label="总量"
            width="150">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="editGood(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <edit-good class="edit-good" v-if="mdShow" :good="good" :title="editTitle" :editOption="editOption" @cancelEdit="cancelEdit"></edit-good>
    <div class="md-overlay" v-if="mdShow==true" @click="closeModel"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import EditGood from "./EditGood";
  import LineData from '../components/LineData'
    export default {
      name: "GoodsList",
      data(){
          return{
            mdShow:false,
            good:{},
            editTitle:'',
            editOption:'',
            goodsList:[]
          }
      },
      components:{
        EditGood,
        LineData
      },
      mounted() {
        this.getGoodsList()
      },
      methods:{
        getGoodsList(){
          axios.get('/goods/getGoodsList').then((res)=>{
            this.goodsList = res.data.result
          })
        },
        closeModel(){
          this.mdShow = false
        },
        addGood(){
          this.good = {};
          this.mdShow = true;
          this.editTitle = '添加商品';
          this.editOption = '确认添加'
        },
        editGood(row){
          this.good = row;
          this.mdShow = true
          this.editTitle = '编辑商品'
          this.editOption = '确认修改'
        },
        cancelEdit(msg){
          this.mdShow = msg
        }
      }
    }
</script>

<style scoped>
  .el-header{
    height: 45px;
  }
  .goods-header{
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 10px;
  }
  .goods-search{
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .goods-search>*{
    margin-left: 10px;
  }
  .goods-sort{
    display:inline;
    padding-right:50px;
    float: right;
    background-color: #f1f1f1;
  }
  .md-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
  }
  .edit-good{
    z-index: 2000;
  }
</style>
