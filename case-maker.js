const camelCase = function(input) {
  
  //let's change the strings into an array, to access the first letter of each
  let arr = input.split(' ');
  
  //loop through the array, skipping the first string
  for (let i = 1; i < arr.length; i++) {

    //reassign each string in the array to the same string with a capital first letter
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  }

  //return a concatenated string of all the words by joining the array with quotes ('')
  return arr.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));