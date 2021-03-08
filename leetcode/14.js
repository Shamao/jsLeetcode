const a = ['flower', 'flow', 'fl']
let prefix = a[0];

a.forEach((item) => {
  console.log(item)
  console.log(item.indexOf(prefix))
  while (item.indexOf(prefix) != 0) {
    if (prefix.length == 0) {
      return ""
    }

    prefix = prefix.substr(0, prefix.length - 1)
  }
})

console.log(prefix)
