function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charVals: number[] = [];

  chars.forEach((char: string) => {
    charVals.push(char.charCodeAt(0));
  });

  if (new Set(charVals).size !== charVals.length) {
    return false;
  }
  for (let i = 0; i < charVals.length; i++) {
    if (charVals[i] >= charVals[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
