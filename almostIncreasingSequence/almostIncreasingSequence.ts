function almostIncreasingSequence(sequence: number[]): boolean {
  let counter: number = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] < sequence[i - 1]) {
      counter++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }
  return counter <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 1]))
console.log(almostIncreasingSequence([1, 3, 2])) 