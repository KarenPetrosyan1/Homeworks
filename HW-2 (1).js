// Task1. 1. Given a string. Check whether the string is palindrome or not.
  
//Տարբերակ 1․
function isPalindrome(word){
  for(i = 0; i < word.length/2 ; i++){
    if(word[i] !== word[word.length - 1 - i] || word[i] === " "){
      return 'No';
    }
    
  }
    return 'Yes';
}
isPalindrome("racecar")


//Տարբերակ 2․
function checkPalindrom (str) {
   let word1 = str.split('').reverse().join('')
  if(str !== word1 || str === "" ){
    return 'No'
  }
    return 'Yes'
}
 checkPalindrom ("racecar")



//Task2.
  