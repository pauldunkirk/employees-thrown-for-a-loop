$(document).ready(function(){
  var personArray = [];
  var totalYears = 0;
  // years(personArray);
  // function years (array){
  //   $('#employeeTable').empty(); // empty table before each loop
  //   array.forEach(function(employee, i){
  //     //called array loops length to function employee  //var populates years of experience into totalYears var// tr and td created in employeeTable//employee.name etc means name property(key) of that array is put in that td - same for yearsOfExperience and totalYears
  //     totalYears += employee.yearsOfExperience;
  //     $('#employeeTable').append(
  //       '<tr>' +
  //       '<td>' + employee.name + '</td>' +
  //       '<td>' + employee.yearsOfExperience + '</td>' +
  //       '</tr>'
  //       );
  //       $('#totalYears').text(totalYears);
  //   });
  //   return totalYears; // need to call this to populate table
  // }
  // event listener click submit button starts a function// input name, val() back to a va// create a new employee object with key name and our var as populating variable, an// and yearas of Experience key populating with yearsHere variable (both of which we just got from the input fields// then we push this new employee object into the personArray (hard coding? no. working with our array of objects// then we call the years function, passing in personArray as parameter
  $('form').on('submit', function(event){
    event.preventDefault();
    $('#employeeTable').empty();
    totalYears = 0;
    var submissionArray = $(this).serializeArray(); // not userful [{}, {}, {}]
    var newEmployeeObject = {};

    submissionArray.forEach(function(inputFieldObject){
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
    })
    // console.log('submission array', submissionArray);
    console.log('newEmployeeObject' , newEmployeeObject);
    console.log('personArray' , personArray);
    //   var newName = $('#name').val(); //.val() means get info from input
    //   var yearsHere = parseInt($('#yearsHere').val());
    //   var newEmployeeObject = {name: newName, yearsOfExperience: yearsHere};
    personArray.push(newEmployeeObject);
    personArray.forEach(function(employee){
      totalYears += parseInt(employee.yearsHere);
      $('#employeeTable').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsHere + '</td>' +
        '</tr>'
      )
    });
      $('#totalYears').text(totalYears);
    // years(personArray);
  });
  });
