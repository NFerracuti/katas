const whereCanIPark = function(lot, car) {
  let vehicle = null
  if (car === 'regular') {
    vehicle = 'R';
  } else if (car === 'small') {
    vehicle = 'S'
  } else if (car === 'motorcycle') {
    vehicle = 'M'
  } else {
    return false; //car type isn't accepted in the lot
  }
  let output = [-1, -1];
  for (let Y = 0; Y < lot.length; Y++) {
    for (let X = 0; X < lot[Y].length; X++) {
      if (vehicle === 'R') {
        if (vehicle === lot[Y][X]) {
          output[1] = Y;
          output[0] = X;
          return output;
        }
      } else if (vehicle === 'S') {
        if (vehicle === lot[Y][X] || lot[Y][X] === 'R') {
          output[1] = Y;
          output[0] = X;
          return output;
        }
      } else if (vehicle === 'M') {
        if  (vehicle === lot[Y][X] || lot[Y][X] === 'R' || lot[Y][X] === 'S') {
          output[1] = Y;
          output[0] = X;
          return output;
        }
      }
    }
  }
  if (output[0] === -1) {
    return false;
  } else {
    return output;
  }
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['s', 'r', 's', 'm', 'm', 's']
  ],
  'motorcycle'
))

