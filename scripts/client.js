const employeeList = [];

$(document).ready(readyUp);

function readyUp() {
  console.log('JQ readyUp is working!');
  $('.js-submitButton').on('click', addEmployee);
}

function addEmployee() {
  const firstName = $('.js-firstName').val();
  const lastName = $('.js-lastName').val();
  const idNumber = $('.js-idNumber').val();
  const jobTitle = $('.js-jobTitle').val();
  const salary = $('.js-annualSalary').val();
  employeeList.push({
    firstName,
    lastName,
    idNumber,
    jobTitle,
    salary,
  });
}
