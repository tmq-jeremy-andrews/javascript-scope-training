const globalVar = 300;

const hidden = () => {
  const localVar = 120;

  console.log(`${globalVar * localVar}`);
};

hidden();
console.log(`${globalVar * localVar}`); // Will throw an error
