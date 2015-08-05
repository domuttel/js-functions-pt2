// Longest word in an array
//take string and make it an array
//find loop for longest word and return
var wordString = "The biggest problem with the world is that we do not get along.";

function longestWordOfAnArray(string) {
  var wordString= "";
  var arrayOfWords = string.split(' ');
  for (i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > wordString.length){
      wordString = arrayOfWords[i];
    }
  console.log(wordString);
  }
}
longestWordOfAnArray(wordString);


// 1. Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var gameChangers = {'Todd': 23, 'Brent': 67, 'Sally': 12, 'Sarah': 34};

function oldestPerson(older) {
  var name = "";
  var oldest = 0;
  for (var i in older){
    if (older[i] > oldest) {
      oldest = older[i];
      name = i;
    }
  }
   return name;
}
oldestPerson(gameChangers);

//1. Refactor the `longestWord` function so that it ignores punctuation.

var wordStringer = "The? biggest, problem! with+ the. world: is@ that we- do; not$ get* along.";

function longestWordOfAnArray(string) {
  var wordString= "";
  var noPunctuation = string.replace(/[.,-\/#!$@+?%\^&\*;:{}=\-_`~()]/g,"");
  var words = noPunctuation.split(" ");
  for (i = 0; i < words.length; i++) {
    if (words[i].length > wordString.length){
      wordString = words[i];
    }
  }
  return wordString;
}
console.log(longestWordOfAnArray(wordStringer));

// 1. Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.

function factorial(ranNum, result) {
  if (result === undefined) {
    result = 1;
  }
  if (ranNum === 1) {
    return result;
  } else {
      result = result * ranNum;
  }
  return factorial(ranNum - 1, result);
}
console.log(factorial(6));