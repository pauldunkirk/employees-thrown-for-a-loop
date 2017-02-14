$(document).ready(function(){
  var personArray = [  // this will eventually be replaced by our database
    {name: 'Tom', yearsOfExperience: 10},
    {name: 'Celina', yearsOfExperience: 4},
    {name: 'Kris', yearsOfExperience: 14 }
  ];

  years(personArray);

  function years (array){
    var totalYears = 0;
    $('#employeeTable').empty(); // empty table before each loop
    array.forEach(function(employee){
      //called array loops length to function employee
      //var populates years of experience into totalYears var
      // tr and td created in employeeTable
      //employee.name etc means name property(key) of that array is put in that td - same for yearsOfExperience and totalYears
      totalYears += employee.yearsOfExperience;
      $('#employeeTable').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsOfExperience + '</td>' +
        '<td>' + totalYears + '</td>' +
        '</tr>'
      );
    });
    return totalYears; // need to call this to populate table
  }


  //
 // event listener click submit button starts a function-
 // input name, val() back to a var
 // create a new employee object with key name and our var as populating variable, and
 // and yearas of Experience key populating with yearsHere variable (both of which we just got from the input fields)
// then we push this new employee object into the personArray (hard coding? no. working with our array of objects)
// then we call the years function, passing in personArray as parameter
  $('#submit').on('click', function(){
    var newName = $('#name').val(); //.val() means get info from input
    var yearsHere = parseInt($('#yearsHere').val());
    var newEmployeeObject = {name: newName, yearsOfExperience: yearsHere};
    personArray.push(newEmployeeObject);
    years(personArray);
  });
});
