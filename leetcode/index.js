// 第一种 找出max
const yushui = function (nums) {
  const max = 3
  const maxIndex = 5

  let sum = 0
  let blackSum = 0
  let leftMax = nums[0]
  let rightMax = nums[nums.length -1]
  for (let i = 1; i < maxIndex; i++) {
    const item = nums[i]
    blackSum += item
    if (item > leftMax) {
      leftMax = item
    }
    sum += leftMax
  }
  console.log(sum, blackSum)

  for (let i = nums.length - 1; i > maxIndex; i--) {
    const item = nums[i]
    blackSum += item
    if (item > rightMax) {
      rightMax = item
    }
    sum += rightMax;
  }

  console.log(sum, blackSum)
  return sum - blackSum;

}

const nums = [0, 1, 0, 2, 0, 3, 3, 0, 2, 0, 1]
console.log("开始")

console.log(yushui(nums))
