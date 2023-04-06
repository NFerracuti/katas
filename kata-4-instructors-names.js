const instructorWithLongestName = function(instructors) {
  let name = {}
  let num = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > num) {
      num = instructors[i].name.length;
      name = instructors[i];
    }
  } return name;
};
// my function here works as per the solution. however I felt as if i was missing some thigns or there was a better/more readable way to do this.
// upon comparing to other solutions, can confirm there are better ways to do this, inadditional to adding some 'validation statements' for the array and names within. 
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));