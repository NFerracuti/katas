const urlEncode = function(text) {

  //finally figured out how to remove the spaces from
  //the string without using methods like trim or replace
  let a = 0;

  while (text[a] === ' ') {
    a++;
  }

  let text1 = '';

  for (let x = a; x < text.length; x++) {
    text1 += text[x];
  }

  let b = text1.length - 1;

  while (text1[b] === ' ') {
    b--
  }

  let trimText = '';

  for (let i = 0; i <= b; i++) {
    trimText += text1[i];
  }

  let output = '';

  for(let z = 0; z < trimText.length; z++) {

    if(trimText[z] === ' ') {

      output += '%20';

    } else {

      output += trimText[z];

    }

  }
  return output;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));