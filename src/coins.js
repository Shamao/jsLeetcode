//
const minCoinCount = (coins = [2, 5, 10], target = 4) => {
  const arr = new Array(target + 1).fill(target * 2)
  console.log(arr)

  arr[0] = 0
  for (let i = 1; i < target + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        console.log(i, coins[j], i - coins[j], arr[i - coins[j]])
        arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1)
      }
    }
  }


  const count = arr[target] == target * 2 ? -1 : arr[target]
  console.log(count)
}

minCoinCount()




