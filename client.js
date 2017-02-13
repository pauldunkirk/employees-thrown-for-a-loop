$(document).ready(function(){
  var personArray = [
    {name: 'Tony', yearsOfExperience: 10},
    {name: 'Carla', yearsOfExperience: 4},
    {name: 'Kris', yearsOfExperience: 14 }
  ];

  function years (array){
    var totalYears = 0;
    array.forEach(function(employee, i){
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
  console.log(years(personArray));
});
