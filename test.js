// const arr = [3, 4, 5, 1, 2]
//
// let i = 0
// let j = arr.length - 1
//
// while (i < j) {
//   const middle = (i + j) / 2
//   if (arr[i] < arr[middle]) {
//     i = middle + 1
//   } else if (arr[j] > arr[middle]) {
//     j = middle - 1
//   } else {
//     j--
//   }
//
// }
//
// console.log (i)
//ka


const a = function (x, n) {
  let sum = 1

  if (n < 0) {
    x = 1/x
    n = -n
  }

  while (n > 0) {
    if (n & 1) {
      sum *= x
    }

    x *= x
    n >>= 1
  }
  return sum
}

console.log(a(2, -3))
