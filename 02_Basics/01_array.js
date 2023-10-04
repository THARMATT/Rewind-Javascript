// array:resiables in js
const arr =[1,2,3,4,5,5]
//arr.pop()
//arr.push(23)
//arr.unshift(4) //add at first
//arr.shift() //remmove item from first

//const myarr=arr.join();
//console.log(myarr)
//console.log(typeof(myarr))
//slice splice:give a section of array

const newarr=arr.slice(1,3)
console.log("a",arr) //dont change original array
const newarr1=arr.splice(1,3)
console.log("b",arr) //change original array

//console.log(newarr1)
console.log(newarr)
console.log(newarr1)
//console.log(typeof(arr))
//console.log(typeof(newarr))