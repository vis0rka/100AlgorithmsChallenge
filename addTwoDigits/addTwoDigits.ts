function addTwoDigits(n: any): any {
  const temparray = n.toString().split("");
  return temparray.reduce((base, curr) => base + parseInt(curr), 0)
}

console.log(addTwoDigits(295));