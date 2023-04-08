import  fs from "fs"
import { config } from "process";
import { CHINESE } from "../const/re_code"
import mammoth from "mammoth";
//import "../common_code/dou"
import { SEED } from "../db/db"
import { type } from "os";
let dd :string="11";
const onlydir="src/resources/"
const more="src/resources/mores/抖音文案/网易云音乐热评"
let dir=fs.readdirSync(onlydir)



async  function capWordData (ds:any): Promise<any> {

    let dirlist=fs.readdirSync(more)
    let worddatas:Array<any>=[]
    let tdatas:Array<any>=[]
    dirlist.map(async (d,i)=>{
        console.log(d)
        if(i<=10){
      await  mammoth.extractRawText({ path: more+"/"+d })
        .then(function(result) {
            let  text = result.value; // The raw text 
            let tdata=text.split(/\n/gi)
            tdata.map((t:any,j:any)=>{    
             
                if(t.length){
                    let t1=t.split("——")
                    let t3={
                        text:t1[0],
                        song:t1[1].replace(/网易云音乐热评|《|》/gi,"")
                    }
                    console.log(t3)
              //   SEED.addSong(t3.text,"网易云",t3.song)
                }
                })
            
      
        })
        }
    })
  

}


async  function asyncmap (ds:any[]): Promise<any> {
    let datas:Array<any>=[];
  
    ds.map((d)=>{
        if(d!=' '&&d){
            
           let x=d.match("[^\u4e00-\u9fa5]+我")
         //  console.log(x)
            datas.push(d)
        }  
       
      })
      return datas;
}

async  function getlist (): Promise<any>{}
    let dk :[any];
    let cc = fs.readFile(onlydir+(dir?dir[dir.length-1]:""), 'utf-8', async function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("success");
            dd=data.replace(/「|」|\r/gi, "")
            let datas=dd.split(/\n/gi)
           
    
        
     dk=await asyncmap(datas)

    
   // console.log(dk)
        }
    });

    





  