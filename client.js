console.log('hello');
var personArray = [
      {name: 'Tony', yearsOfExperience: 10},
      {name: 'Carla', yearsOfExperience: 4},
      {name: 'Kris', yearsOfExperience: 14 }
    ];

var totalYears = 0;
// var years = function (array){
//   (array.forEach(function(totalYears, i){
//       console.log(totalYears.yearsOfExperience);
// }
// });

function years (array){
    var totalYears = 0;
    array.forEach(function(employee, i){
      totalYears += employee.yearsOfExperience;
      console.log(totalYears);
    });
    return totalYears;
}

console.log(years(personArray));

  //
  //personArray.forEach(function(person, i){ // person means above
  //   console.log(person.name + ' is at index ' + i);
  // });


    // for (var i = 0; i < personArray.length; i++) {
    // var person = personArray[i]; // this step is shortened below
    //    console.log(person.name + ' is at index ' + i);
    //  }

//   console.log(person.name + ' is at index ' + i);
// console.log(yourFunction([
//     { name: Tony, yearsOfExperience: 10 },
//     { name: Carla, yearsOfExperience: 4 },
//      { name: Kris, yearsOfExperience: 14 }
//   ]));


//
// });
