import express from "express"
//import { SEED } from "../db/db"
//解析
const bodyParser = require('body-parser')
import cors from 'cors';
import {GetXlsx}  from  "../../src/excel/xlsx"

    /*

async function getData() {
    // 在这里，您可以执行异步操作，如读取文件
    let  data = await GetXlsx("./src/xlsx/tag.xlsx")
    // 执行完异步操作之后，可以继续处理数据
  console.log(data[0])
}
getData();
*/
var server = express();
server.use(cors());
server.use(bodyParser.urlencoded({
    extended: true
}))

server.use(bodyParser.json())

let getQuick =function(url:string,table:string){
    server.post(url, async function (req, res) {
        
        let param =req.body.param
        if(url=="/seed/good_sentences"){
         let list,count;
        if (table  ){
            let sql_list='SELECT * FROM ' + table + ' WHERE LOCATE( '+"'"+param.like_total+"'"+" ,  text )>0 "+" limit "+ param.start+" , "+param.size;
            let sql_count ='SELECT COUNT(1) as total FROM  ' + table + ' WHERE LOCATE( '+"'"+param.like_total+"'"+" ,  text )>0 ";
           // list = await SEED.getData(sql_list)
            //count= await SEED.getData(sql_count)
        }
        res.json({
            method: "POST",
            data:{
                list:list,
               // count:count[0].total
            }
            
        })
    }
     else if(url=="/seed/good_sentences_like"){
        let list
       if (table  ){
           let sql_list='SELECT * FROM ' + table + ' WHERE LOCATE( '+"'"+param.like_total+"'"+" ,  text )>0 ";
         
          // list = await SEED.getData(sql_list)
         
       }
       res.json({
           method: "POST",
           data:{
               list:list
           }
           
       })
   }
    });
}

var postServer =  function (url: string) {
    server.post(url, async function (req, res) {
        console.log("进入", req.body)
        let data
        if (url == "/seed/get_tag") {
              data = await GetXlsx("./src/xlsx/tag.xlsx")
        } 
        res.json({
            method: "POST",
            data
        })
    })
}

server.all("*", function (req, res, next) {
    var origin = req.headers.origin;
    console.log(origin);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", "3.2.1");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
})

getQuick("/seed/good_sentences","good_sentences")
getQuick("/seed/good_sentences_like","good_sentences")
postServer("/seed/get_tag")
server.listen(8085, () => {
    console.log("成功开启8085");
});