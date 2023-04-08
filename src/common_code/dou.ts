
import { SEED } from "../db/db"

let xx="装逼覅能放in我就佛我就覅OA佛我见附件四of解耦IG而佛爱哦反阿覅噢弄饭iOS覅OAnoinofo安高丽棒子米欧尼们齐买了个婊"

async function CHECK_WORD( w:string){
            let word_sql=" SELECT * FROM dou_word"
            let word_data = await SEED.getData(word_sql);
            word_data.map((s:any,i:any)=>{
            let k= w.indexOf(s.word)
            if(k!==-1){
                   console.log(k,s)}
                   
               }
               )
            }

CHECK_WORD(xx)

      export {}