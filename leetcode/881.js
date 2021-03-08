const a = '1807'
const b = "7810"

let A = 0;
let B = 0

const mapA = {}
const mapB = {}
for (let i = 0; i < a.length; i++) {
  if (a[i] == b[i]) {
    A++;
  } else {
    mapA[a[i] - 0] = mapA[a[i] - 0] || 0 + 1
    mapB[b[i] - 0] = mapB[b[i] - 0] || 0 + 1
  }
}

console.log(mapA)
console.log(mapB)


for (let i = 0; i < 10; i++) {
  B += Math.min(mapA[i] || 0, mapB[i] || 0)
}

console.log(A)
console.log(B)