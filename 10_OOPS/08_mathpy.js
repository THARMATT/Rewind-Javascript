console.log(Math.PI)
const chai={
    name:'ginger chai',
    price:70,
    orderChai(){
        console.log('CHAI CHAI..')
    }
}

const descriptor=Object.getOwnPropertyDescriptor(chai,'name')

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

for (const [key,val] of Object.entries(chai)) {
  if(typeof val!=='function'){
    console.log(`${key}:${val}`)
  }
}