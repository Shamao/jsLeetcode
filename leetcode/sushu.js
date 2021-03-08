// 1,2,3,// 4,5,6,7,8,9,10,11
// 1, 2,3 ,5, 7,11

// 默认都是素数
// 从2开始 自诩遍历  根号n即可
// 如果当前i是zhishu， 取其 i的平方 + （i * count）， 判断是否 < n,  是说明改值是 非素数， 2的范围为， 2 * （2 + n）  3 * （3 + n） 4* （4 + n）能涉及到所有和数


const n = 12

const func = (n) => {
  const arr = new Array(n).fill(true)

  let count = 0

  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i * i; j < n; j += i) {
        console.log(j)
        arr[j] = false
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      count++;
      console.log("紫薯=", i)
    }
  }

  console.log(arr)
  console.log(count)

}

func(n)