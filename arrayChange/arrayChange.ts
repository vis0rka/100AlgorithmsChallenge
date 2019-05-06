function arrayChange(inputArray: number[]): number {
  let counter: number = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let difference = ((inputArray[i] + 1) - inputArray[i + 1])
      inputArray[i + 1] = inputArray[i] +1;
      counter+=difference;
    }
  }
  return counter;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([2, 1, 1]));