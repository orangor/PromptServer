import { GET_ARRAY, ARRAY_SAVE, GET_JSON, JSON_SAVE } from "./src/const/xlsx.js"
let array = [{ name: 'sheet1', data: [[1, 2, 3]] }]
import fs from 'fs'
/*
let excelData = GET_ARRAY(`./src/xlsx/day18.xlsx`)
let data = excelData[0].data
let data_n = []
let type = ["邻里关系", "婚姻家庭", "边界争议", "交通事故", "财产纠纷"]
let counts = [];
data.map((item, index) => {
    if (index % 2 === 0) {
        counts[parseInt(index / 2)] = (item[3] + item[4] + item[5] + item[6] + item[7])
    } else {
        counts[parseInt(index / 2)] += (item[3] + item[4] + item[5] + item[6] + item[7])
    }
})
data.map((item, index) => {
    type.map((t, i2) => {
        let nth = parseInt(index / 2) * 5 + i2

        if (index % 2 === 0) {
            let d = {
                id: nth + 1,
                year: "2020",
                month: parseInt(index / 2) + 1,
                label: t,
                pc: item[3 + i2],
                dj: Number,
                value: Number,
                per: Number
            }
            data_n.push(d)
        } else {
            data_n[nth].dj = item[3 + i2]
            data_n[nth].value = data_n[nth].pc + data_n[nth].dj

            data_n[nth].per = Number(data_n[nth].value) / Number(counts[parseInt(index / 2)])

        }
    })
})
let e2 = GET_JSON(`./src/xlsx/sheet1.xlsx`)
let d2 = e2[0]

let d2num = 0;

d2.map((item) => {
    d2num += item.value
})
let d2_n = []
for (let i = 0; i < 5; i++) {
    let m = { id: i, year: 2020, name: type[i], value: 0, per: 0 }
    d2.map((item) => {
        if (item.label === m.name) {
            m.value += item.value
        }
    })
    m.per = m.value / d2num
    d2_n.push(m)
}
let d3 = excelData[3].data
let data_n3 = []
let type3 = ["民生服务", "矛盾劝解", "参与治安防控", "参与特殊人群服务", "政策法规宣传", "社情民意收集", "突发事件报告", "其它"
]
let counts3 = [];
d3.map((item, index) => {
    let cns = 0
    type3.map((t, i) => {
        cns += item[2 + i]
    })
    if (index % 2 === 0) {

        counts3[parseInt(index / 2)] = cns
    } else {
        counts3[parseInt(index / 2)] += cns
    }
})
d3.map((item, index) => {
    type3.map((t, i2) => {
        let nth = parseInt(index / 2) * (type3.length) + i2

        if (index % 2 === 0) {
            let d = {
                id: nth + 1,
                year: "2020",
                month: parseInt(index / 2) + 1,
                label: t,
                xz: item[2 + i2],
                bj: Number,
                value: Number,
                per: Number
            }
            data_n3.push(d)
        } else {
            data_n3[nth].bj = item[2 + i2]
            data_n3[nth].value = data_n3[nth].xz + data_n3[nth].bj

            data_n3[nth].per = Number(data_n3[nth].value) / Number(counts3[parseInt(index / 2)])

        }
    })
})
let d4 = e2[2]

let d4num = 0;

d4.map((item) => {
    d4num += item.value
})
let d4_n = []
for (let i = 0; i < type3.length; i++) {
    let m = { id: i + 1, year: 2020, label: type3[i], xz: 0, bj: 0, value: 0, per: 0 }
    d4.map((item) => {
        if (item.label === m.label) {
            m.xz += item.xz
            m.bj += item.bj
            m.value += item.value


        }
    })
    m.per = m.value / d4num
    d4_n.push(m)
}

//JSON_SAVE([data_n, d2_n, data_n3, d4_n])
let excelData25 = GET_ARRAY(`./src/xlsx/d25.xlsx`)
let data25 = excelData25[0].data
let data25x = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
data25.map((item) => {
    let k = 0;

    if (item[1] === 'Ⅰ') {

        k = 0;
    } else if (item[1] === 'Ⅱ') {
        k = 1

    } else if (item[1] === 'Ⅲ') {
        k = 2
    }
    item.map((cow, i) => {
        if (i > 1) {
            data25x[k][i - 2] += cow
        }
    })
})
let data25two = excelData25[1].data
let have25 = []
let bumens = []
let haveTh = 1
data25two.map((itme, i) => {

    if (itme[1].indexOf("/") !== -1) {
        let names = itme[1].split("/")
        names.map((ni) => {
            let nth25 = have25.indexOf(ni)
            if (nth25 === -1) {
                let bumen = { ID: '', BMMC: '', JRXTS: 0, JRSJLS: 0, JRSJL: 0, SJ: "", URL: "", dept_rank: "" }
                bumen.BMMC = ni
                bumen.ID = haveTh
                haveTh++
                bumen.JRXTS += 1;
                bumen.JRSJLS = Math.floor(Math.random() * (25 - 1 + 1) + 5)
                bumen.JRSJL = Math.floor(Math.random() * (1000 - 1 + 1) + 122)
                bumens.push(bumen)
                have25.push(ni)
            } else {
                bumens[nth25].JRXTS += 1;
            }
        })
    } else {
        let nth25 = have25.indexOf(itme[1])
        if (nth25 === -1) {
            let bumen = { ID: '', BMMC: '', JRXTS: 0, JRSJLS: 0, JRSJL: 0, SJ: "", URL: "", dept_rank: "" }
            bumen.BMMC = itme[1]
            bumen.ID = haveTh
            haveTh++
            bumen.JRXTS += 1;
            bumen.JRSJLS = Math.floor(Math.random() * (25 - 1 + 1) + 5)
            bumen.JRSJL = Math.floor(Math.random() * (1000 - 1 + 1) + 122)
            bumens.push(bumen)
            have25.push(itme[1])
        } else {
            bumens[nth25].JRXTS += 1;
        }
    }
})


let data25Xt = excelData25[2].data
let xitongs = []

data25Xt.map((item, i) => {
    let xitong = { ID: "", XTMC: "", ZT: "", LY: "", LYLX: "", LYLX: 0, URL: "", CODE: "", PANEL: "", SJ: "", WIDTH: "", HEIGHT: "", ISVALIDATE: "", ISSUBSYSTEM: "", SZWL: "", BFB: "", FWWLLX: "", JRRY: "", }
    xitong.ID = i + 1;
    xitong.XTMC = item[2]
    if (item[8] === "可连接") {
        xitong.ZT = 0
    } else {
        xitong.ZT = 1
    }
    xitong.LY = item[1]
    xitong.URL = item[3]
    xitong.SZWL = item[5]
    xitong.JRRY = item[6]
    xitongs.push(xitong)
})
let data25Xgnq = excelData25[4].data
let data25gngall = excelData25[5].data
let zygnqs = []
let zygnqth = 0;
let zygnqid = 1;

data25gngall.map((item) => {
    if (item[0]) {
        if (item[0].slice(4, 10) === "20年实施类") {
            let dstart = item[0].indexOf('（')
            let dstend = item[0].indexOf("个）")
            zygnqth++;
            console.log(item[0], item[0].slice(dstart + 1, dstend))
        } else {
            let zygnq = {
                id: zygnqid,
                cygnqmc: data25Xgnq[zygnqth - 1][1], //'产业功能区名称',
                xmmc: item[0],// '项目名称',
                jsdz: item[1], // '建设地址',
                jspc: item[2], //'建设批次',
                zyjsnrjgm: item[3],//'主要建设内容及规模',
                jhjsnx: item[4],// '计划建设年限',
                ztz: item[5],// '总投资',
                jhwczt: item[6],// '2020年计划完成投资（万元）',
                zsbz: item[7],// '资金来源-中省补助',
                bjczzj: item[8], // '资金来源-本级财政资金',
                qtzjly: item[9],// '资金来源-其他（含融资、社会资本方、未明确来源）',
                ydxq: item[10],//'2020年用地需求（亩）',
                ljwctz: item[11], // '2019年底累计完成投资（万元）',
                gcxxjd: item[12], // '2020年底要达到的主要工程形象进度',
                jhkgsj: item[13], // '计划开工时间',
                yzdw: item[14], // '业主单位',
                tjzrdw: item[15],// '推进责任单位',
                hyzgbm: item[16], // '行业主管部门',
            }
            zygnqid++;
            zygnqs.push(zygnq)
        }
    }
})
*/
/*
let xttb = GET_ARRAY(`./src/xlsx/xtxt2.xlsx`)
let xt1 = xttb[0].data
let xt2 = xttb[1].data
let nx1 = []
let nx2 = []
let w1 = []
xt1.map((item) => {

    if (w1.indexOf(item[4]) === -1) {
        nx1.push(item)
    }
})
xt2.map((item) => {
    if (w1.indexOf(item[4]) === -1) {
        nx2.push(item)
    }

})
JSON_SAVE([nx1, nx2])
*/

/*
ARRAY_SAVE([array], "./src/xlsx/d18c.xlsx",)
let array_t2 = [[{ Name: 'name_01', Age: 11, Address: 'address_01' }]];
GET_JSON(`./src/xlsx/User.xlsx`)
JSON_SAVE(array_t2)
*/
/*
require('dotenv').config(); // 加载环境变量

const axios = require('axios');
require('dotenv').config(); // 加载环境变量

const prompt = 'Hello, how are you?';
const max_tokens = 60;
const temperature = 0.7;
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

axios.post(API_URL, {
  prompt,
  max_tokens,
  temperature,
  api_key: process.env.OPENAI_API_KEY,
})
  .then(response => {
    console.log(response.data.choices[0].text.trim());
  })
  .catch(error => {
    console.error(error);
  });*/