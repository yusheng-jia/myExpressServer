var fs = require("fs")
var path = require('path')

function getJson(year){
  // var file = path.join(__dirname,'data/JSON/2019.json')
  return fs.readFileSync('data/JSON/2019.json','utf-8')

}

exports.getData = function(methon,data){
  var items = getJson('2019')
  // var backData={
  //   "code":'100',
  //   "jsonrpc": "2.0",
  //   "data":items
  // }

  return items

}

