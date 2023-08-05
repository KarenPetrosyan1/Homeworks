//arr.slice   բայց բացասական արժեքների համար դեռ չսնացվեց

let newArr = []
function arrSlice(arrOrigin, start, end){
  for(i = start; i < end; i++){
    newArr.push(arrOrigin[i])
  }
   return newArr
}
arrSlice([1,2,3,4,5], 1, 4)