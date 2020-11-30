// 暴力 N2
// 双指针 N, 空间复杂度 1
const arr = [1, 8, 6, 2, 5, 4, 8, 2, 7]

let start = 0
let end = arr.length - 1


let sum = 0
while (start < end) {
  let tempSum = 0
  if (arr[start] < arr[end]) {
    tempSum = arr[start] * (end - start)
    start++
  } else {
    tempSum = arr[end] * (end - start)
    start++
  }

  sum = Math.max(sum, tempSum)
}

console.log(sum)