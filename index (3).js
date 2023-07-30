function unique(arr) {
  let result = []

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem)
    }
  }

  return result
}

let strings = [1, 2, 3, 1, 5,6, 2]

console.log(unique(strings))