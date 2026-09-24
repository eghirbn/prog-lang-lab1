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

//filtering and adding odd multiples of 5 with filter() and reduce

function checkOdd(input){
   return (input%2 != 0);
}

const oddMults5 = fiveTable.filter(checkOdd);

console.log(oddMults5);

//filtering and adding odd multiples of 7 with filter() and reduce
function checkEven(input){
   return (input%2 == 0);
}

function sumUp(total, input){
   return total +input;
}

const evenMults7 = inputTable.map(input => input*=7 ).filter(checkEven).reduce(sumUp, 0);
console.log(evenMults7);

/*getting even multiples of 7
function sumEvenMultiplesOf7(total, input){
   if(input%2 == 0){
      return total + input;
   }
   return total;
}

function sevenTableFunction(input){
   return input*=7;
}

const sevenTable = inputTable.map(sevenTableFunction);

//console.log(sevenTable.reduce(sumEvenMultiplesOf7, 0))
*/
