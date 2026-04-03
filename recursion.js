function factorial(n) {
  console.log("n is ", n);
  if (n === 1 || n === 0) return n;
  return n * factorial(n - 1);
}
