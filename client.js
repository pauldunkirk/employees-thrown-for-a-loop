$(document).ready(function(){
  var personArray = [
    {name: 'Tom', yearsOfExperience: 10},
    {name: 'Celina', yearsOfExperience: 4},
    {name: 'Kris', yearsOfExperience: 14 }
  ];

  years(personArray);

  function years (array){
    var totalYears = 0;
    $('#employeeTable').empty();
    array.forEach(function(employee){
      totalYears += employee.yearsOfExperience;
      $('#employeeTable').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsOfExperience + '</td>' +
        '<td>' + totalYears + '</td>' +
        '</tr>'
      );
    });
    return totalYears;
  }


  //
 // event listener click submit button starts a function-
 // input name, val() back to a var
 // create a new employee object with key name and our var as populating variable, and
 // and yearas of Experience key populating with yearsHere variable (both of which we just got from the input fields)
// then we push this new employee object into the personArray (hard coding?)
// then we call the years function, passing in personArray as parameter (hard coding?)
  $('#submit').on('click', function(){
    var newName = $('#name').val();
    var yearsHere = parseInt($('#yearsHere').val());
    var newEmployeeObject = {name: newName, yearsOfExperience: yearsHere};
    personArray.push(newEmployeeObject);
    years(personArray);
  });
});

// //Pro Mode - New Employee
// New people are getting added to out company every day. (We're growing!)
// Create a form that allows new employees to be added to our array
// and be displayed on the page.
