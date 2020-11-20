const arrToLink = (arr = []) => {
  let head = null
  let cur = null
  arr.forEach((item) => {
    if (!head) {
      head = { value: item }
      cur = head
    } else {
      cur.next = {value: item}
      cur = cur.next 
    }
    // console.log(cur)
  })

  return head
}
const printLink = (a) => {
  while (a) {
    console.log(a.value)
    a = a.next
  }
}

// 反转链表
const reverseLink = (root) => {
  return null
}
module.exports = {
  arrToLink,
  printLink,
}