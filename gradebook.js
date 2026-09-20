/*Objective: make a simple grade book that gives a class average and your letter grade
when function is called in console ( >console.log(studentMsg([array], number);)

idea: avg = sum / # elements, .length can be used for array size. sum function needs to be built.

letter grade:

100    |  A+
90-99  |  A
80-89  |  B
70-79  |  C
60-69  |  D
>60    |  F

condition: Student passes if grade is not F

*/
function getAverage(scores){
  let sum = 0;
  for (const score of scores){
  sum += score;
    }


  return sum / scores.length
  }

function getGrade(b){
  if (b < 60)
    return "F";
  
  else if( b >= 60 && b < 70)
    return "D";
  
  else if( b >=70 && b < 80 )
    return "C";
  else if( b >= 80 && b < 90)
    return "B";

  else if( b >= 90 && b < 100)
    return "A";
  else
    return "A+";

};

function hasPassingGrade(grade){

return getGrade(grade) !== "F";
};

function studentMsg(array1, num1){
  let avgScoreNumber = getAverage(array1);
  let gradeLetter = getGrade(num1);
  let hasPassed = hasPassingGrade(num1)
  if (hasPassed){
        return "Class average: " + avgScoreNumber + ". Your grade: " + gradeLetter + ". You passed the course.";
    } 
    else {
        return "Class average: " + avgScoreNumber + ". Your grade: " + gradeLetter + ". You failed the course.";
  }
}
