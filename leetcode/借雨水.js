const { max } = require("lodash")

// 备忘录算法
const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

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
  ret += Math.min(maxL[i], maxR[i]) - arr[i]
}

console.log(ret)

//https://github.com/labuladong/fucking-algorithm/blob/master/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97/%E6%8E%A5%E9%9B%A8%E6%B0%B4.md


