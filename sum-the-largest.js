const sumLargestNumbers = function(data) {
  let one = 0;
  let two = 0;
  for (i=0; i < data.length; i++) {
    if (data[i] > one) {
      two = one;
      one = data[i];
    } else if (data[i] > two) {
      two = data[i];
    }
  } return one + two;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2, 48]));