let express = require('express');
let router = express.Router();
var fs = require("fs")



let Good = require('../models/good');

router.post('/',function (req,res) {
  let files = req.files
  let good = req.fields
  if(files.goodImages){
    files.goodImages.forEach((file,index)=>{
      let backName = '';
      switch(file.type){
        case 'image/pjpeg':
          backName = 'jpg';
          break;
        case 'image/jpeg':
          backName = 'jpg';
          break;
        case 'image/png':
          backName = 'png';
          break;
        case 'image/x-png':
          backName = 'png';
          break;
      }
      let imgName ='../public/goodImages'+''+Math.floor(Math.random()*10)+'.'+backName;
      let path = file.path
      fs.renameSync(path,imgName)
    })
  }
})

router.get('/getGoodsList',function (req,res,next) {
  Good.find({},function (err,doc) {
    if (err){
      res.json({
        stutas:0,
        msg:'获取数据失败',
        result:''
      })
    }else{
      res.json({
        stutas:1,
        msg:'',
        result:doc,
      })
    }
  })
})

router.post('/addGood',function (req,res,next){
  let files = req.files
  let good = req.fields
  Good.findOne({goodName: good.goodName},function (err,doc) {
    if (err){
      res.json({
        stutas:0,
        msg:'添加失败',
        result:''
      })
    }else{
      if(doc){
        doc.total += parseInt(good.total);
        doc.save(function (err,doc2) {
          if (err){
            res.json({
              stutas:0,
              msg:'添加失败',
              result:''
            })
          }else{
            res.json({
              stutas:1,
              msg:'添加成功',
              result:doc2
            })
          }
        })
      }else{
        let newGood = new Good(good)
        newGood.save((err,doc1)=>{
          if (err){
            res.json({
              stutas:0,
              msg:'添加失败',
              result:''
            })
          }else{
            res.json({
              stutas:1,
              msg:'添加成功',
              result:doc1
            })
          }
        })
      }
    }
  })
})

module.exports = router
