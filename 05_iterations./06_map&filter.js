const num=[9,9,8,76,67]
const Number=num.filter((numb)=>{
   return numb>9
})
// console.log(Number);

// filter with foreach
const newnum=[]
num.forEach((numb)=>{
   if(numb>9){
      newnum.push(numb)
   }
})
// console.log(newnum)

//example books
const books=[
   {title:'rigveda',genre:'fiction',publish:"1200bc",edition:'20001'},
   {title:'veda',genre:'fiction',publish:"1200bc",edition:'20002'},
   {title:'gveda',genre:'fiction',publish:"1200bc",edition:'20003'},
   {title:'rig',genre:'fiction',publish:"1200bc",edition:'20004'},
   {title:'rigv',genre:'love',publish:"1200bc",edition:'20005'},
   {title:'rigve',genre:'love',publish:"1200bc",edition:'20006'},
   {title:'rigved',genre:'history',publish:"1200bc",edition:'20007'},
   {title:'rigvedaa',genre:'history',publish:"1200bc",edition:'20007'},
   {title:'mahabharat',genre:'history',publish:"1200bc",edition:'20008'},
]
let userBooks=books.filter((bk)=>bk.genre==='action')
 userBooks=books.filter((bk)=>bk.publish==='1200bc')
 userBooks=books.filter((bk)=>bk.publish==='1200bc'&& bk.genre==='love')

console.log(userBooks)