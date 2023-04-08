
import PATH from 'path'
import FS from 'fs'
import NODE_XLSX from 'node-xlsx'
import XLSX from 'xlsx'

/**
 * 
 * @param {String} dir 
 * @param {Boolean} absolutely 
 */
const GET_ARRAY = function (path, absolutely) {
    let absolutely_path = ""
    if (absolutely) {
        absolutely_path = path
    } else {
        absolutely_path = PATH.resolve(path)
    }
    let array = NODE_XLSX.parse(absolutely_path)
    return array
}
/**
 *数据例子： [{name: 'sheet1', data: [[1, 2, 3]]}]
 * @param {{
 * name:String,
 * data:Array
 * }} array
 *  @param {String} path
 */
const ARRAY_SAVE = function (array, name) {
    FS.writeFileSync(name, NODE_XLSX.build(array), "binary");
}
/**
 * 
 * @param {String} path 
 */
const GET_JSON = function (path, absolutely) {
    let absolutely_path = ""
    if (absolutely) {
        absolutely_path = path
    } else {
        absolutely_path = PATH.resolve(path)
    }
    let workbook = XLSX.readFile(absolutely_path)
    let sheetNames = workbook.SheetNames
    let data_json = []
    sheetNames.map(item => {
        let sheet = XLSX.utils.sheet_to_json(workbook.Sheets[item])
        data_json.push(sheet)
    })
    return data_json
}

/**
 *数据例子：[[{ Name: 'name_01', Age: 11, Address: 'address_01' }]]
 * @param {} data 
 */
const JSON_SAVE = function (data, name) {
    let workbook = { //定义操作文档
        SheetNames: [], //定义表明
        Sheets: {},
    }
    data.map((item, index) => {
        workbook.SheetNames.push("sheet" + index)
        let sheet = XLSX.utils.json_to_sheet(item)
        let keys = Object.keys(sheet).sort(); //排序 [需要注意，必须从A1开始]
        let ref = keys[1] + ':' + keys[keys.length - 1]; //这个是定义一个字符串 也就是表的范围[A1:C5]

        workbook.Sheets["sheet" + index] = sheet //Object.assign({}, sheet, { '!ref': ref })  //通过工具将json转表对象
    })
    //console.log(workbook.Sheets)
    let xlsx_name = ""
    var date = new Date();
    if (name) {
        xlsx_name = name
    } else {
        xlsx_name = `./src/xlsx/` + `${date.getDate()}-${date.getHours()}-${date.getMinutes()}.xlsx`;
    }

    XLSX.writeFile(workbook, xlsx_name); //将数据写入文件
}
export { GET_ARRAY, ARRAY_SAVE, GET_JSON, JSON_SAVE }