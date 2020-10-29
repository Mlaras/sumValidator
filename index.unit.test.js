const sumvalidator = require("./index.js");

describe('Test SumValidator',()=>{
    /*
    * Si entra un numero
    * si cualquier input es un null
    * array de string de numeros
    * array de string palabras
    * que entren dos numeros
    * array vacio
    * 
    **/
    it("si entra un numero de numeros", () => {
        const test=sumvalidator.twoNumberSum([1,2,3,4,5,6,7,8,9],12)
        expect(test).toStrictEqual([3,9])
      });
})