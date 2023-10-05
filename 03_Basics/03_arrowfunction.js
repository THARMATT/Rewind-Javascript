const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to our website`);//this is for current context refer
        console.log("this",this);
    }
}
// user.welcomeMessage()
// user.username="Ninam"
// console.log(user.welcomeMessage)
// user.welcomeMessage()
// console.log("this",this);

//arrow function

function wet(){
    let username='hitesh'
console.log(this.username)
}
wet()
const wets=function (){
    let username='hitesh'
console.log(this.username)
}
wets()
const wety=()=>{
    // let username='hitesh'
    // console.log(this.username)
    console.log("arr",this)
}
wety()

const sum=(a,b)=>{
    return a+b
}
console.log(sum(12,12))

{}//have to write return
//()//no need to write return
const summ=(a,b)=>(a+b) //implicit return

//explicit return :when we use return

//object return
const add=()=>({username:"nigam"})
   console.log(add()) 

   const myarr=[1,2,3,4,5]
   myarr.forEach(()=>{})