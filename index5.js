// Task1.  array.find

function myFind(item, array){
for(let i = 0; i < array.length; i++){
  if(item === array[i]){
   return true
        break;
      }
    } return 'undefined'
}    
myFind(4, [1,2,3,4,5])



// Task2.  array.findIndex

function myFind(item, array){
for(let i = 0; i < array.length; i++){
  if(item === array[i]){
   return i
        break;
      }
    } return '-1'
}    
myFind(3, [1,2,3,4,5])



// Task3.  array.map
// ete chishta, kxndrem dzer comment@ ashxatacnelu hamar
const myOwnMap = function MyMap(callback) {
    const resultArr = [];
    for (let i = 0; i < this.length; i++) {
  resultArr.push(callback(this[i], index, this));
    }
    return resultArr;
}  


// Task4.  array.reduce
const myOwnReduce = function(callback, acc) {
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
}