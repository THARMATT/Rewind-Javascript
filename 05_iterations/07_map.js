const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 0];
const newnum = number.map((num) => {
  return num + 10;
});
// console.log(newnum)

const newnums = number
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num > 50);
console.log(newnums);
