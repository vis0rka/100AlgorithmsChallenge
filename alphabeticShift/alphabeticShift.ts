const alphabet: any[] = ("abcdefghijklmnopqrstuvwxyz").split("");

function alphabeticShift(inputString: string): any {
  let tempArray = inputString.split("");
  for (let i = 0; i < tempArray.length; i++) {
    let tempNumb = 0;
    
    if (tempArray[i] !== 'z') {
      tempNumb = alphabet.indexOf(tempArray[i]) + 1;
    }
    tempArray[i] = alphabet[tempNumb];
  }

  return tempArray.join('');
}

console.log(alphabeticShift('crazy'));