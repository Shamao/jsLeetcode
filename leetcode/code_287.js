//暴力
const findRepeatCountV1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(arr[i])
      }
    }
  }
}


// 快慢指针 数组的value 作为next指针的index  
const findRepeatCountV2 = (arr) => {
  let slow = 0;
  let fast = 0;

  while (arr[slow] != arr[fast] || slow == fast) {
    fast = (fast + arr[slow]) % arr.length
    slow = (slow + 1) % arr.length
    console.log(slow, fast)

  }

  console.log('结果, ', slow, fast)
}

const findRepeatCountV3 = (nums) => {
  let slow = 0;
  let fast = 0;
  let t = 0

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    console.log('结果111, ', slow, fast)
    if (slow == fast) break;
  }
  console.log('结果, ', slow, fast)
  while (true) {
    console.log('结果112, ', slow, fast)
    slow = nums[slow];
    fast = nums[fast];
    // if (slow == fast) break;
  }

  console.log('结果, ', slow, fast)
}


// findRepeatCountV3([1, 2, 3, 4, 4])
// findRepeatCountV3([1, 3, 4, 2, 2])

findRepeatCountV3([3, 1, 3, 4, 2])
// findRepeatCountV3([1, 2, 4, 4, 0])



// 3 -> 4 -> 2 -> 3 
// 4 -> 3 -> 2 -> 4

