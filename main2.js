function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const n = 10; // помыняйте на любе бажане число Фібоначчі
const result = fibonacci(n);

console.log(`Число Фібоначчі для n=${n} дорівнює: ${result}`);
