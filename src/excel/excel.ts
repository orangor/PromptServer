import * as Excel from 'exceljs';

// 读取 Excel 文件
const workbook = new Excel.Workbook();



  async function GetExcel(addr:string){
   
        let workbookdata  = await workbook.xlsx.readFile(addr)
       let  worksheets=workbookdata.worksheets
 
        let data: any=[]
       for (let  sheet of worksheets){
           //获取表的值

let SheetValues: any;
SheetValues=sheet.getSheetValues()

let filteredData = SheetValues.filter((row: null[])=> !row.includes(null ));
      
        let d=JSON.parse(JSON.stringify(filteredData))
        
        let name =sheet.name
data.push({name:name,data:d} )
       }
        return data
    }
    export {GetExcel }