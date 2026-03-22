const XLSX=require("xlsx")

   function read(){
   const workbook = XLSX.readFile('./Booking_page.xlsx');

 const sheet = workbook.Sheets[workbook.SheetNames[0]];

 const data = XLSX.utils.sheet_to_json(sheet);

 return data[0];
}
module.exports={read}