const globalImmutable = [2, 4, 6, 8, 10];

const func = (num) => {
  if (num % 2 == 0) {
    let theNumberA = num;
    return `${theNumberA} is even.`;
  } else {
    let theNumberB = num;
    return `${theNumberB} is odd.`;
  }
};

for (let n of globalImmutable) {
  let result = func(n);
  console.log(`Checking ${n}:`, result);
}
