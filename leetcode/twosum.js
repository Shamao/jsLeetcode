const twoSum = function (nums, sum) {
  const map = {}
  const ret = []
  for (let i = 0; i < nums.length; i++) {
    const itme = nums[i]
    if (map[item] = item) {
      ret.push(`${item}- ${map[item]}`)
    } else {
      ret[item]=sum-item
    }
  }

  return ret
}


const nums = [2, 7, 11, 15]
const sum = 13

console.log(twoSum(nums, sum))