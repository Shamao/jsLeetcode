// [0,1,1,2,3,5,8,13]
const feibo = (n = 7) => {
  const a = []
  a[0] = 0
  a[1] = 1

  if (n < 2) {
    return n
  }

  for (let i = 2; i < n + 1; i++) {
    a[i] = a[i - 1] + a[i - 2]
  }
  return a[n]
}

console.log(feibo())
