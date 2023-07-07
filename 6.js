function solve(input) {
  const [searchWords, ...words] = input;

  const wordOccurances = searchWords.split(" ").reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  words.forEach((word) => {
    if (wordOccurances.hasOwnProperty(word)) {
      wordOccurances[word] += 1;
    }
  });

  // print to the console
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
