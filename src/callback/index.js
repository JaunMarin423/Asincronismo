function sum(num1, num2) {
  return num1 + num2;
}

function calculate(num1, num2, pepito) {
  return pepito(num1, num2);
}

console.log(calculate(6, 2, sum));

function date(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow)
}

date (printDate);
