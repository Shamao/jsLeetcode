const content = '((({})()))'

const content1 = '}{'

const map = {
  // '{': '}',
  // '[': ']',
  // '(': ')',
  '}': '{',
  ']': '[',
  ')': '('
}

const method = (content) => {
  let list = []

  for (let i = 0; i < content.length; i++) {
    const target = content[i]
    if (list.length == 0) {
      list.push(target)
    } else {
      if (list[list.length - 1] == map[target]) {
        // console.log("前", list)
        list.splice(list.length - 1, 1)
        // console.log("后", list)
      } else {
        list.push(target)
      }
    }
  }

  // console.log(list)
  return list.length == 0
}

console.log(`${content} = ${method(content1)}`)
