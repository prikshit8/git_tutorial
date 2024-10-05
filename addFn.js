function sum(...restParams) {
  let sum = 0;
  for(let i=0;i<restParams.length;i++){
    sum+=restParams[i];
  }
  return sum;
}
