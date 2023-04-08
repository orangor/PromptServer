import * as XLSX from 'xlsx';

async function GetXlsx(addr:string){
   
    let workbook  = await XLSX.readFile(addr)
    console.log(workbook.SheetNames[0])
    let  sheet = workbook.Sheets[workbook.SheetNames[0]];
let data :any[]=[]
    for (let  name of workbook.SheetNames){

        let  sheetData=XLSX.utils.sheet_to_json(workbook.Sheets[name])
        data.push({name:name,sheet_data:sheetData})
    }
     
    return data
}
export {GetXlsx}