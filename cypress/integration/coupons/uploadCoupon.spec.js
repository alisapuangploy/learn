// import { writeFileSync } from "fs";
import * as XLSX from "xlsx";
describe('Upload Coupon Detail', () => {
    

    it('Verify initial design of ชื่อคูปอง field', () => {
        // cy.readFile('../fixtures/dataTest/coupon.xlsx');
        // cy.fixture('./dataTest/coupon.xlsx').then((rows) => {
        //     console.log(rows);
        //   })
        
        // try {
            const workBook = cy.readFile("../fixtures/dataTest/coupon.xlsx");
            // const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.testData);
            // writeFileSync(
            //   "./cypress/fixtures/testData.json",
            //   JSON.stringify(jsonData, null, 4),
            //   "utf-8"
            // );
        //   } catch (e) {
        //     throw Error(e);
        //   }
        
        
    })
})