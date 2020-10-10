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
  render();
}

function render() {
  console.log('render is up and running!');
  $('.js-employeeList').empty();
  for (let i = 0; i < employeeList.length; i++) {
    const item = employeeList[i];
    $('.js-employeeList').append(
      `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.idNumber}</td><td>${item.jobTitle}</td><td>$${item.salary}</td></tr>`
    );
  }
  //update total monthly cost
  let monthly = 0;
  for (let i = 0; i < employeeList.length; i++) {
    const element = employeeList[i];
    $('.js-totalMonthlyNumber').empty();
    monthly += parseInt(element.salary);
    $('.js-totalMonthlyNumber').text(monthly);
  }
}
