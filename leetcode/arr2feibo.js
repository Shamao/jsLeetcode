

const backtrack = (content = i, ret = [], index = 0) => {
  if (index == content.length && ret.length >= 3) {
    return true
  }

  for (let i = index; i < content.length; i++) {
    const item = content[i]
    let curValue = content.substr(index, i - index + 1)

    if (content[index] == '0' && i > index) {
      break;
    }

    if (curValue > Number.MAX_SAFE_INTEGER) {
      break
    }

    const size = ret.length
    const B = parseInt(ret[size - 1]) || 0
    const C = parseInt(ret[size - 2]) || 0
    const sum = B + C
    console.log('ret.length', curValue, '====', sum)
    if (size >= 2 && (curValue > (B + C))) {
      //如果截取的数字大于res中前两个数字的和，说明这次截取的太大，直接终止，因为后面越截取越
      break
    }

    if (size < 2 || (curValue == (B + C))) {
      // 满足条件 
      // console.log(`value1 =`, ret, curValue)
      ret.push(curValue)
      // console.log(`value2 =`, ret, curValue)
      if (backtrack(content, ret, i + 1)) {
        return true
      }
      // console.log('结果=false')
      ret.pop()
    }
  }

  return false
}

const splitIntoFibonacci = (S) => {
  let ret = []
  backtrack(S, ret, 0)
//   ret.forEach((item) => {
//     if(item.length > 1 && item[0] == 0) {
//     ret = []
//     }
// })
  console.log(`结果 + =`, ret)
}

let a = '123456579'
a = '0123'
a = '4481220'
// a = '0000'
splitIntoFibonacci(a)