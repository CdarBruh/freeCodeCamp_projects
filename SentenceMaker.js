 /*
Objective: 
- make a sentence generating bot that can print a different sentence when given different variables.
- simple use of string concatenations to build a simple sentence generator
Idea:
 - Strings cannot be updated because they are immutable primitives.
 - could backtick literals (``) be the key? 
 - only activatable with a function instance.
guess this is the best this can be for now.
*/


let 
  adjective = "quick",
  noun =      "fox",
  verb =      "angry",
  place =     "hill",
  adjective2 ="keen",
  noun2 =     "grapes";
  
const firstStory = ("Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".");

// basic variable bank //

console.log("First story: "+ firstStory);

//new variables//

adjective = "toasty";
noun =      "falcon";
verb =      "smug";
place =     "tree";
adjective2= "lazy";
noun2=      "coal";

//new generated string series since need to call the new instance of these variables.//

const secondStory = ("Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".");


//should create output//

console.log("Second story: " + secondStory);
