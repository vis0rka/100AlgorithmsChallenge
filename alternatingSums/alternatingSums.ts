function alternatingSums(a: number[]): number[] {
  let totalWeights: number[] = [0,0]
  a.forEach((element: number, index:number) => {
    if (index % 2 == 0) {
      totalWeights[0] += element;
    } else {
      totalWeights[1] += element;
    }

  });

  return totalWeights;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))