const array1 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
function toUpperCase(str){
  return str = str.toUpperCase()
}
let result1 = array1.map(toUpperCase)

const array2 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
function checkOddEven(num){
  if(num % 2 ==0){
    return `even`
  }else{
    return `odd`
  }
}
let result2 = array2.map(checkOddEven)

const array3 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
function positive(num){
  if(num < 0){
    num *= -1
    return num
}
  else{
    return num
}
}
let result3 = array3.map(positive)
