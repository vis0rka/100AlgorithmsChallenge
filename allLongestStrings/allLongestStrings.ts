function allLongestStrings(inputArray: string[]): string[] {
  let firstSringLength = inputArray[0].length;

  for (let i = 1; i < inputArray.length; i++) {

    firstSringLength = inputArray[i].length > firstSringLength ? inputArray[i].length : firstSringLength;

  }

  return inputArray.filter(el => el.length >= firstSringLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "abasd"]));
console.log(allLongestStrings(["aba", "aadasda", "aadasdb", "vcd", "aba"]));