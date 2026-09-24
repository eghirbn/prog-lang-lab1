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
console.log("fiveTable: ");
console.log(fiveTable);

//manipulating inputTable array with thirteenTable function (multiples of 13)
function thirteenTableFunction(input){
   return input*=13;
}

const thirteenTable = inputTable.map(thirteenTableFunction);
console.log("thirteenTable: ");
console.log(thirteenTable);

//manipulating inputTable array with Math.sqrt to make squaresTable
const squaresTable = inputTable.map(Math.sqrt);
console.log("squaresTable: ");
console.log(squaresTable);


//filtering odd multiples of 5 with filter()

function checkOdd(input){
   return (input%2 != 0);
}

//created Array of length 100, first element's index =1 to be able to get the values from 1 to 100
const filterfrom100 = Array.from({ length: 100 }, (_, i) => i + 1);
const oddMults5 = filterfrom100.filter(item => ((item%5)==0) && ((item%2) != 0) );

console.log("Printing Odd Mutltiples of 5: ");
console.log(oddMults5);

//filtering and adding odd multiples of 7 with filter() and reduce
function checkEven(input){
   return (input%2 == 0);
}

function sumUp(total, input){
   return total +input;
}
//also using array filterFrom100
const evenMults7 = filterfrom100.filter(item => ((item%7)==0)).filter(checkEven).reduce(sumUp, 0);
console.log("Even Multiples of 7: ");
console.log(evenMults7);

//currying cylinder volume function
function cylinder_volume(r){ //making it take 1 input at a time and chaining
   return (h) => 3.14*r*r*h;
}
/*Call the curried function using:
o r = 5, h = 10
o r = 5, h = 17
o r = 5, h = 11
*/
console.log("Calling cylinder volume with parameters: (5, 10), (5,17), (5, 11)");

console.log(cylinder_volume(5)(10));
console.log(cylinder_volume(5)(17));
console.log(cylinder_volume(5)(11));


//creating html table with closures
makeTag = function(beginTag, endTag){ //takes tags like "<td>, </td>"
   return function(textcontent){
      return beginTag + textcontent + endTag; //places textContent in the tags
   }
}

const tableTag = makeTag("<table>\n", "\n</table>");
const trTag = makeTag("<tr>\n", "\n</tr>");
const tdTag = makeTag("<td>\n", "\n</td>");

//make table from inside out. cells > row > table
const cell1 = tdTag("Row 1, cell 1"); //passes this as textContent to the returned inner function
const cell2 = tdTag("Row 1, cell 2");

const row = trTag(cell1+cell2);

const htmlTable = tableTag(row);

console.log(`\nHTML table: \n ${htmlTable}`);

//making generic mulitplier
const genericTable = (multiplier, condition) => (array) => array.map(num => num*multiplier).filter(condition);

//example to see if generic works
const sampleTable = Array.from({ length: 20 }, (_, i) => i + 1);
const someCondition = num => num%8 == 0;
const tempTable = genericTable(4, someCondition)(sampleTable);

//generic success
console.log("Generic Success Test: ");
console.log(tempTable);