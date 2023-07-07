function solve(input) {
  // Complex solution
  const employees = input.reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {});

  Object.keys(employees).forEach((key) => {
    console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
  });
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
