function includeArrays(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {
    console.log('日志', pre, next, i)
    let expression = expressions[i - 1];

    if (Array.isArray(expression)) {
      expression = expression.join('');
    }

    return prev + expression + next;
  });

  result = result.trim();

  return result;
}

// const ret = includeArrays`
//    1 s  3
// 2
// 3
// 4
// `

// console.log(ret)


const ret = [1,2,3,4,5,6].reduce((preValue, curValue, curIndex, arr) => {
  console.log(preValue, curValue, curIndex, arr)
  arr = [1]
  return preValue + curValue
})
