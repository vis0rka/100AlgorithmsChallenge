function adjacentElementsProduct(inputArray: number[]): number {
  let maxProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    maxProduct = product > maxProduct ? product : maxProduct;
  }

  return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 5, 6, -5]));
console.log(adjacentElementsProduct([3, 6, 20, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 5]));