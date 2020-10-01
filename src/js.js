const a = function (arr, target) {
  if (!arr || arr.length == 0) {
    return -1
  }

  let start = 0
  let end = a.length - 1

  let middle = (start + end) / 2
  while (arr[middle]  != target) {
    if (target > arr[middle]) {
      start = middle
    } else if (target < arr[middle]) {
      end = middle
    } else {
      return middle
    }

    middle  =  (start + end) / 2;
  }

}

console.log(a([0, 1, 2,3 ], 1))
