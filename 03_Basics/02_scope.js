 let a=10;
 const b=20;
let c=40; //global scope
 
 {}//scope is arrived here
 if(true){
   let a=90;
   let c=400;//block scope
  //  console.log("m",c)
 }
//  console.log(a)
//  console.log(b)
//  console.log(c)
 //++++++++++++++++++++++++++++++++++++

 function one (){
  const username="Nigam"
  function two(){
    const rollno="21"
    function three(){
const date="5october"
console.log(rollno)
console.log(username)
console.log(date)
    }
    three()
  }
  two()
 }
 one()
//  two()
//  three()
//++++++++++++++++++++intersting++++++++++++++++++
console.log(addone(5))
function addone(num){
return num+1;
}
addone(5)

//console.log(addtwo(5))//hoisting cant access before declartion
const addtwo =function(num){
  return num+2
}
console.log(addtwo(5))