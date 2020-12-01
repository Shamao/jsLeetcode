const { createTree } = require("./createTree")

createTree([12, 8, 11, 15, 18, 7, 16, 6])

//         12
//       8       15
//    7    11  null  18
//  6  null         16
const bfs1 = (root) => {
  const queen = []
  queen.unshift(root)

  const ret = []
  while (queen.length > 0) {
    const item = queen.shift()
    ret.push(item.)

    console.log(item)
    if (item.left) {
      queen.push(item.left)
    }

    if (item.right) {
      queen.push(item.right)
    }
  }

  return ret
}

console.log(bfs1(createTree([12, 8, 11, 15, 18, 7, 16, 6]))) 
