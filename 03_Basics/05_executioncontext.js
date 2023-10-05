//interview Qs :browser vs deno vs bun vd node for E C

//javascript is signle threaded
//global execution context

// function execution context
//eval execution context
// this in brrower give window object

// ++++++++++++++++++++++++++++++++
//two phases
// memory phase| |creation phase
//execution phase

let val=10;
let val2=12;
function add(num1,num2){
    let total =num1+num2
    return total
}
let result1= add(10,2)

//memory execution phase : collect all variables and mark them as undefined

//val1-undefined
// val2-undefined
// add-definition
// result1-undefined
// result1-undefined

// */first cycle

//Execution phase

// val1-10=>num1
// val2-12=>num2
// total-15=>result1
// add=>Execution context 
//new variables environment+ececution thread: clled as new execution context

//call Stack-global execution || lifo if we call three function inside by inside like a contain b and b contain c then get poped firstly then b then a

function one(){
    console.log("one")
    two()
}

function two(){
    console.log("one")
    three()
}

function three(){
    console.log("one")
}
one()
two()
three()

