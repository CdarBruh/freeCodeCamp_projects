/*
Goal: make an index finder that fulfills the following conditions:
- You should have a getIndexToIns function that takes two arguments: an array and a number.
- You should use the sort method to sort the array in ascending order.
- Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
- Your getIndexToIns function should always return a number.

*/
function getIndexToIns(arr,num){
  arr.sort((a,b) => a-b);
  let c = arr.findIndex(s => s-num >= 0)

  if (c == -1){
    if (typeof c ==! 'undefined' || c !== null)  //- ignores empty arrays, whose lengths are 0, meaning
                                                //you will be inserting the new number (num) at the '0'th position.
      return c = arr.length;                   //- places new number (n) at the highest place in the array, 
                                              //which is the size of the array (remember arrays start at '0')

    else
      return c = 0;
    }


  return c;
  }
