function add(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param1: number[]): number {
  let total = 0;
  param1.forEach(e => total += e)
  return total;
}

function add3(...param1:number[]): number {
 return param1.reduce((base, curr) => base + curr,0)
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

console.log(add3(1,2,3,4,5));
console.log(add3(2,3));

