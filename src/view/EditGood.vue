<template>
  <div class="md">
    <div class="title">
      <p>{{title}}</p>
    </div>
    <el-form
      label-width="150px"
      label-position="center"
      size="mini"
      :model="good"
      :rules="rules"
      ref="good"
    >
      <el-form-item label="商品名称" size="medium" prop="goodName">
        <el-input v-model="good.goodName"></el-input>
      </el-form-item>
      <el-form-item label="商品种类" prop="goodType">
        <el-radio-group v-model="good.goodType">
          <el-radio label="蔬菜"></el-radio>
          <el-radio label="水果"></el-radio>
          <el-radio label="零食"></el-radio>
          <el-radio label="酒水"></el-radio>
          <el-radio label="肉类"></el-radio>
          <el-radio label="饮料"></el-radio>
          <el-radio label="调料"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="进货数量" prop="total">
        <el-input v-model.number="good.total"></el-input>
      </el-form-item>
      <el-form-item label="进价" prop="goodPrice">
        <el-input v-model.float="good.goodPrice"></el-input>
      </el-form-item>
      <el-form-item label="售价" prop="salePrice">
        <el-input v-model.number="good.salePrice"></el-input>
      </el-form-item>
      <el-form-item label="上架" prop="onSale">
        <el-switch v-model="good.onSale"></el-switch>
      </el-form-item>
      <el-form-item label="到货时间" prop="intoDate">
        <el-date-picker placeholder="选择时间" v-model="good.intoDate"></el-date-picker>
      </el-form-item>
      <el-form-item label="上传时间" prop="upDate">
        <el-date-picker placeholder="选择时间" v-model="good.upDate"></el-date-picker>
      </el-form-item>
      <el-form-item label="商品介绍" prop="goodIntro">
        <el-input type="textarea" v-model="good.goodIntro"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="goodName">
        <div class="uplaod-img">
          <input type="file" v-on:change="onchange" accept="image/*" multiple="multiple">
          <div v-for="item in imgUrls" style="background-color: #d4d4d4;padding: 3px">
            <img :src="item" alt="" style="width: 50px;height: auto">
            <i v-if="item" class="el-icon-close" style="position:relative;top:0px;right: 0" @click="deleteImg(item)"></i>
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('good')">{{editOption}}</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import axios from "axios"
    export default {
      name: "EditGood" ,
      props:[
        'good',
        'title',
        'editOption'
      ],
      data(){
          return{
            imgUrls:[],
            imgFiles:[],
            rules: {
              goodName: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              goodType: [
                { required: true, message: '请选择一项', trigger: 'change' }
              ],
              total: [
                {required: true, message: '数量不能为空！',trigger: 'blur'},
                { type: 'number', message: '请输入商品数量,必须是数字', trigger: 'blur' }
              ],
              goodPrice: [
                { type: 'float', required: true, message: '请输入商品进价,必须是数字', trigger: 'blur' }
              ],
              salePrice: [
                { type: 'number', required: true, message: '请输入商品售价,必须是数字', trigger: 'blur' }
              ],
              goodIntro: [
                { required: true, message: '请选择活动资源', trigger: 'blur' }
              ],
              desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ]
            }
          }
      },

      methods:{
        submitForm(formName){
          this.$refs[formName].validate((valid)=>{
            if(valid){
              this.onSubmit()
            }else {
              return false
            }
          })
        },
        onSubmit(){
          let formData = new FormData();
          for(let i=0;i<this.imgFiles.length;i++){
            formData.append('goodImages',this.imgFiles[i])
          }
          formData.append('goodName',this.good.goodName)
          formData.append('goodType',this.good.goodType)
          formData.append('intoDate',this.good.intoDate)
          formData.append('upDate',this.good.upDate)
          formData.append('total',this.good.total)
          formData.append('onSale',this.good.onSale)
          formData.append('goodPrice',this.good.goodPrice)
          formData.append('salePrice',this.good.salePrice)
          formData.append('goodIntro',this.good.goodIntro)
          axios.post('/goods/addGood', formData,{headers: {
              'Content-Type': 'multipart/form-data'
            }}).then((res)=>{

          })
          this.cancel();
        },
        cancel(){
          this.$emit('cancelEdit',false)
        },
        onchange(e){
          this.imgFiles = e.target.files;
          let files = e.target.files;
          for (let i = 0;i < files.length;i++){
            let reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = (event)=> {
              this.imgUrls.push(event.target.result);
            }
            console.log(this.imgUrls)
          }
        },
        deleteImg(item){
          let imgList = [];
          this.imgUrls.forEach(i =>{
            if(item != i){
              imgList.push(i)
            }
          })
          this.imgUrls = imgList
        }
      }
    }
</script>

<style scoped>
  .el-input{
    width: 250px;
  }
  .md{
    z-index: 1000;
    padding: 20px 100px;
    background-color: rgba(255, 255, 255, 0.99);
    position: fixed;
    top: 80px;
    left: 250px;
    border: 1px #d4d4d4 solid;
    border-radius: 5px;
  }
  .title{
    text-align: center;
    margin-bottom: 25px;
  }
  .uplaod-img{
    display: flex;
    justify-content: space-around;
  }
</style>
