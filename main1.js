function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const number = 5; // щамініть це число на те, яке ви хочете
const result = factorial(number);

console.log(`Факторіал числа ${number} дорівнює: ${result}`);
