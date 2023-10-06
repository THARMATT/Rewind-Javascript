//reduce accumulator and currentval 

const myNums =[1,2,3]
const total=myNums.reduce(function(acc,cval){
    // console.log('a',acc,'b',cval)
    console.log()
    return acc+cval
   
},0)
// console.log('t', total); 
const shopkart=[
    {
        item:'data-scence',
        price:2000
    },
    {
        item:'Python',
        price:2100
    },
    {
        item:'DSA',
        price:6000
    },
]

const priceToPay=shopkart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)