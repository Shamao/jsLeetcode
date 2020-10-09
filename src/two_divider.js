const two = function (arr, target) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  // console.log(start, end, middle)
  while (middle >= start && middle <= end) {

    if (arr[middle] < target) {
      start = middle + 1
      middle = Math.floor((start + end) / 2)
    } else if (arr[middle] > target) {
      end = middle - 1
      middle = Math.floor((start + end) / 2)
    } else {
      return middle
    }

    console.log(start, middle, end)
  }

  return -1
}



const index = two([1, 2, 3, 4, 5, 6, 7, 9], 9)
console.log(index)