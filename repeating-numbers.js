const repeatNumbers = function(data) {

  //define our output as an array for now
  output = [];

  //loop through the array of arrays
  for (let i = 0; i < data.length; i++) {

    //Since i know what i am doing with the numbers inside the nested arrays,
    //I can index them directly, instead of looping through them - no nested loop required

    //first i need to define a string variable of the value at index 0 of the nested arrays
    let text = (data[i][0].toString());

    //now i can repeat the string for the number of times of index 1 of the nested arrays,
    //and add each to the master array, "output", using .push
    output.push(text.repeat(data[i][1])); 
  }

  //return a string, not an array, using .join
  return output.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
