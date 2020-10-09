const pre = null
for (let i = 0; i < 5; i++) {
  const item = {
    val: i,
    next: null
  }
  
  pre.next = item
  pre = item
}

