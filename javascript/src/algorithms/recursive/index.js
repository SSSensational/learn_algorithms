const sum1 = (n) => {
    if (n <= 1) return n;
    return n + sum1(n - 1)
}
  
const sum2 = (n, prevSum = 0) => {
    if (n <= 1) return n + prevSum;
    return sum2(n - 1, n + prevSum)
}
  
const sum = (n, prevSum = 0) => {
    if (n <= 1) return n + prevSum;
    return () => sum(n - 1, n + prevSum)
}

const trampoline = f => (...args) => {
    let result = f(...args);
    while (typeof result === 'function') result = result();
    return result;
}

const sum3 = trampoline(sum);

// console.log(sum1(1000000))
// console.log(sum2(1000000))
// console.log(sum3(1000000))
  
  