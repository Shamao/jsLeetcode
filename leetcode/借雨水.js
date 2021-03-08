const { max } = require("lodash")

// 备忘录算法
let arr = [1, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

const maxL = []
const maxR = []

maxL[0] = 0
maxR[arr.length - 1] = 0
// 求左边最大
for (let i = 1; i < arr.length; i++) {
  maxL[i] = Math.max(arr[i], maxL[i - 1])
}

console.log(maxL)
// 求右边最大
for (let i = arr.length - 2; i >= 0; i--) {
  maxR[i] = Math.max(arr[i], maxR[i + 1])
}

let ret = 0
for (let i = 1; i < arr.length - 1; i++) {
  const temp = Math.min(maxL[i], maxR[i]) - arr[i]
  console.log(`可接受 ${temp}`)
  ret += temp
}

console.log(ret)

//https://github.com/labuladong/fucking-algorithm/blob/master/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97/%E6%8E%A5%E9%9B%A8%E6%B0%B4.md


// 双指针算法 nb

// arr = [1, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const length = arr.length

let left = 1;
let right = length - 1
let l_max = arr[1]
let r_max = arr[length - 1]

let ret2 = 0
console.log(`${left} =  ${right}`)
while (left < right) {
  l_max = Math.max(arr[left], l_max)
  r_max = Math.max(arr[right], r_max)
  // console.log(arr[left], l_max, arr[right], r_max)
  let tempRet = 0
  if (l_max < r_max) {
    tempRet = l_max - arr[left]
    console.log(`${left} =  ${right}可接受 ${tempRet}`)
    left++
  } else {
    tempRet = r_max - arr[right]
    console.log(`${left} =  ${right}可接受 ${tempRet}`)
    right--
  }

  // console.log(``)
  ret2 += tempRet
}

console.log(ret2)
