const employeeList = [];
let yearly = 0;

$(document).ready(readyUp);

function readyUp() {
  console.log('JQ readyUp is working!');
  // event listener for targeted element
  $('.js-submitButton').on('click', addEmployee);
  // line of code to call deleteEmployee()
  // event listener for children of targeted element
  $('.js-employeeList').on('click', '.js-deleteBtn', deleteEmployee);
}

function addEmployee() {
  const firstName = $('.js-firstName').val();
  const lastName = $('.js-lastName').val();
  const idNumber = $('.js-idNumber').val();
  const jobTitle = $('.js-jobTitle').val();
  const salary = $('.js-annualSalary').val();
  let numSalary = Number(salary);
  employeeList.push({
    firstName,
    lastName,
    idNumber,
    jobTitle,
    salary: numSalary,
  });
  render();
}

function deleteEmployee() {
  // 2 parents to get up to the <tr> in the table
  $(this).parent().parent().remove();
  const index = $(this).data('index');
  // // toDelete.empty();
  employeeList.splice(index, 1);

  render();
}

function render() {
  // console.log('render is up and running!');
  let yearly = 0;
  $('.js-employeeList').empty();
  for (let i = 0; i < employeeList.length; i++) {
    const item = employeeList[i];
    $('.js-employeeList').append(
      `<tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.idNumber}</td>
        <td>${item.jobTitle}</td>
        <td>$${item.salary}</td>
        <td><button class="js-deleteBtn" data-index="${i}">Delete</button></td>
      </tr>`
    );
    yearly += item.salary;
    $('.js-totalMonthlyNumber').empty();
    monthly = roundToTwo(yearly / 12);
    $('.js-totalMonthlyNumber').text(monthly);
    console.log(monthly);
  }
  // updateMonthly();
}

// function updateMonthly() {
//   //update total monthly cost
//   // *** NEED TO FIX IT SO ONLY 2 DECIMAL PLACES SHOW!!!!!!!!
//   let monthly = 0;
//   $('.js-totalMonthlyNumber').empty();
//   for (let i = 0; i < employeeList.length; i++) {
//     const element = employeeList[i];
//     monthly = roundToTwo(yearly / 12);
//     $('.js-totalMonthlyNumber').text(monthly);
//   }
//   if (monthly > 20000) {
//     $('.js-totalMonthlyNumber').css('background-color', 'red');
//     console.log('over 20K');
//   } else {
//     $('.js-totalMonthlyNumber').css('background-color', '');
//   }
// }

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}
