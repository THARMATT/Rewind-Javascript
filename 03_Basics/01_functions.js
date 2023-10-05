//functions :due to which we can wrap our code and call whenever we need
function mane(){
    console.log('nigam')
}
mane();

function sum(a,b){ //a b are parameters
  ab=  a+b;
   console.log(ab)
}

sum(30,undefined) //30 undefined are arguments
const abc=sum(2,3)
console.log(abc)

function add(a,b){
    let result=a+b
    return result;
}
const add2=add(90,88)
console.log(add2)

function addition(a,b){
    return a+b;
}
const add3=addition(90,88)
console.log(add3)

function loginuser(username){
    if(!username){
        console.log("eneter username")
        return
    }

    return `${username} just login`
}
console.log( loginuser("Md"))

function shopkart(...num1){ //rest operator
return num1
}
console.log(shopkart(23,56,78))

const user={
    username:"nigam",
    price:88
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

 //+++++++++++++++++++
//  array
const mynewarray=[233,4,,56,7,8,9,6,5,4,5]
 function getarray(getarrayval){
    return getarrayval[2]
 }
 console.log(getarray(mynewarray))//or
 console.log(getarray([2345.,66,7,77,]))//or


