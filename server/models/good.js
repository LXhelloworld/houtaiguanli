const mongoose = require('mongoose')
const schema = mongoose.Schema;

let goodSchema = new schema({
  "imgUrls":Array,
  "goodName":String,
  "goodType":String,
  "goodPrice":Number,
  "salePrice":Number,
  "saleNum":Number,
  "total":Number,
  "onSale":Boolean,
  "goodIntro":String,
  "upDate":Date,
  "intoDate":Date
})

module.exports = mongoose.model('Good',goodSchema)
