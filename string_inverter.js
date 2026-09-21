/*
Goal: make a simple string inverter
idea: split string into an array, reorder LtF, and join as one string.

.split(cond) : method that splits string into an array (conditional indicates conditions for ending element (ex: space (" "), no space ('').)

.join(cond) : method that joins elements in an array into a string (conditionals indicate character that spaces out element. if no space, just insert ('').)

.push(element): method that inserts elements into an array.

*/

function reverseString(stR){
  let array1 = stR.split('');
  let yarra1 = []
  for (let i=0;i <= array1.length; i++){
    yarra1.push(array1[array1.length - i]); 
  }
return  yarra1.join('');

}
