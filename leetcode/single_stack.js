// 比如说，输入一个数组 nums = [2,1,2,4,3]，你返回数组 [4,2,4,-1,-1]。

let a = [2, 3, 2, 4, 3]
let ret = []
let temp = []

console.log(a)
for (let i = a.length - 1; i >= 0; i--) {
  while (temp.length > 0 && temp[temp.length - 1] <= a[i]) {
    temp.pop()
  }
  ret[i] = temp.length == 0 ? -1 : temp[temp.length - 1]
  temp.push(a[i])

  console.log(`index = ${i} 结果${ret[i]}  , 临时素组${temp}`)
}

console.log(ret)

/**
 * 按
 * 
 * index = 5的时候 temp为空 ret为 -1， temp加入最后一项 temp = 【3】
 * index = 4的    temp不为空， 进入while循环，清temp  temp  = 【4】
 * index = 3， temp 不为空， cur  = 2 < 4 不进入渲染， 得ret 结果 4， temp = 【4， 2】
 * 以此类推
 */




a = [73, 74, 75, 71, 69, 76]


ret = []
temp = [] // 存索引
console.log(a)
for (let i = a.length - 1; i >= 0; i--) {
  while (temp.length > 0 && a[temp[temp.length - 1]] <= a[i]) {
    temp.pop()
  }
  ret[i] = temp.length == 0 ? 0 : (temp[temp.length - 1] - i) // 得到的天数
  temp.push(i)

  console.log(`index = ${i} 结果${ret[i]}  , 临时素组${temp}`)
}

console.log(ret)
