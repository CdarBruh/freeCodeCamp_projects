/*
Objective: create a book organizer that organizes books older than 1950
idea: use .filter and .sort methods to organize an array list.
*/
const books = [{ title:"BlindSight" , authorName:"Peter Watts" , releaseYear: 2006 }, {title: "Foundation", authorName: "Issac Assimov", releaseYear: 1951}, {title: "Grays Anatomy", authorName: "Henry Gray and Henry Vandyke Carter", releaseYear: 1858}, {title:"Frankenstein; or, The Modern Prometheus" , authorName:"Mary Shelley" , releaseYear: 1818 }];

function sortByYear (firstBook,secondBook){

let diff = firstBook.releaseYear - secondBook.releaseYear

if (diff < 0) {
  diff = -1
}

else if (diff > 0){
  diff = 1
}

else {
  diff = 0
  }

return diff
}


const filteredBooks = books.filter( book => book.releaseYear <= 1950)

filteredBooks.sort(sortByYear); // apparently, calling functions like this leaves the parentheses section free for conditional functions.

