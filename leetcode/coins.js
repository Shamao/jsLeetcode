//
const minCoinCount = (coins = [2, 5, 10], target = 10) => {
  const arr = new Array(target + 1).fill(target * 2)
  arr[0] = 0
  console.log(arr)

  for (let i = 1; i < target + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        console.log(`硬币${i} = 当前的${coins[j]}   次数是${ arr[i - coins[j]] + 1} `)
        arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1)
      }
    }
  }


  const count = arr[target] == target * 2 ? -1 : arr[target]
  console.log(count)
}

minCoinCount()


// 1. 设置默认都为 =  targrt * 2的值，后面是比谁小
// 2. 从1 => target 遍历
  //  2.1  遍历coins
  //  2.2  如果targetI >= coins 进入遍历， 否则不进入遍历 
  //  2.3  计算targetI的值， 默认是 target * 2， 和 arr[targetI - coin] + 1, 谁小就设置arr[targetI]




