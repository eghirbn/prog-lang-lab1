/*Eyan Ghirbn
1002179368
Due: 9/24/26
*/

//manipulating inputTable array with fiveTable function (multiples of 5)
function fiveTableFunction(input){
   return input*=5;
}
const inputTable = [1,2,3,4,5,6,7,8,9,10];

const fiveTable = inputTable.map(fiveTableFunction);
console.log(fiveTable);

//manipulating inputTable array with thirteenTable function (multiples of 13)
function thirteenTableFunction(input){
   return input*=13;
}

const thirteenTable = inputTable.map(thirteenTableFunction);
console.log(thirteenTable);

//manipulating inputTable array with Math.sqrt to make squaresTable
const squaresTable = inputTable.map(Math.sqrt);
console.log(squaresTable);

//filtering odd multiples of 5 with filter()
function checkOddMultiplesOf5(input){
   return input%2 != 0;
}

const oddMults5 = inputTable.filter(checkOddMultiplesOf5);
console.log(oddMults5);
