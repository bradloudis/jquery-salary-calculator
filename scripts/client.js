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

// compiles all input fields into an object that is pushed into the employeeList array
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

// when delete btn is clicked - removes that employee's info from the DOM and splices their object from the array
function deleteEmployee() {
  // 2 parents to get up to the <tr> in the table
  $(this).parent().parent().remove();
  const index = $(this).data('index');
  employeeList.splice(index, 1);
  render();
}

// empties input fields
function emptyFields() {
  $('.js-firstName').val('');
  $('.js-lastName').val('');
  $('.js-idNumber').val('');
  $('.js-jobTitle').val('');
  $('.js-annualSalary').val('');
}

// updates the DOM with the employee info. updates yearly variable. updates total monthly costs and highlights if over $20K
function render() {
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
    // as a note! line 55 - data-index="${i}" basically gives that specific delete btn a 'nametag' to be used later in deleteEmployee()
    yearly += item.salary;
    $('.js-totalMonthlyNumber').empty();
    monthly = roundToTwo(yearly / 12);
    $('.js-totalMonthlyNumber').text(monthly);
    if (monthly > 20000) {
      $('.js-totalMonthlyNumber').css('background-color', 'red');
    } else {
      $('.js-totalMonthlyNumber').css('background-color', '');
    }
  }
  emptyFields();
}

// I borrowed this code from https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}
