console.log('js');

$(document).ready(readyUp);

function readyUp() {
  console.log('JQ readyUp is working!');
  $('.js-submitButton').on('click', addEmployee);
}

function addEmployee() {
  console.log('submit button has been clicked!');
}
