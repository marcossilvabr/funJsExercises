const findLonelyInt = (ints, n) => {
  let result = -1;
  for (let i = 1; i <= n; i++) {
    let count = ints.filter(x => x === i).length;
    count === 1 ? result = i : null;
  }
  return result;
}

console.log(findLonelyInt([10, 4, 10, 5, 1, 2, 3, 8, 5, 9, 1, 7, 8, 6, 3, 6, 4, 9, 2], 10));