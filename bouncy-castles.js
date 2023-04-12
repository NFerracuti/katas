const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let volume = (4/3)*PI*(radius*radius*radius);
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = PI*(radius*radius)*(height/3);
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  volume = height*width*depth;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function (solids) {

  let totalVolume = 0;

  for (let i = 0; i < solids.length; i++) {

    if (solids[i]['type'] === 'prism') {

      totalVolume += prismVolume(solids[i]['height'], solids[i]['width'], solids[i]['depth']);


    } else if (solids[i]['type'] === 'sphere') {

      totalVolume += sphereVolume(solids[i]['radius']);


    } else if (solids[i]['type'] === 'cone') {

      totalVolume += coneVolume(solids[i]['radius'], solids[i]['height']);


    } else {

      return console.log("One of these is not a shape!");
    }
  }

  return totalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);