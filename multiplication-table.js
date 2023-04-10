const multiplicationTable = function(maxValue) {

  let table = [];

  for (let i = 1; i <= maxValue; i++) {

    let row = [];

    table.push(row);

    for (let x = 1; x <= maxValue; x++) {

      row.push(x*i);
    }
  }

  let result = []

  for (let y = 0; y < table.length; y++) {

    result.push(table[y].join(' '))
  }

  return result.join('\n');
}


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));