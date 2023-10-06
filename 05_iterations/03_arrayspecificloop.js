// for of

const arr =[1,2,3,4,5,6,7,8,9]

for (const val of arr) {
    // console.log("value :",val)
    
}

const grretings="hello world!"


for(const greet of grretings){
    // console.log('each charcheter:',greet)
}

//maps 
//like arrray
const map =new Map() //take unique value
map.set('IN','India')
map.set('IN','India')
map.set('IN','India')
map.set('Us','united states')
// console.log(map)
 for (const [key,val] of map) {
// console.log(key ,val)
 }

 const myobject={
    name:"rajmah",
    age:"21"
 }

//  for(const [key,val] of myobject){
//     //console.log(key,val) //cant iterate object
//  }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++?

//loop on  objects

const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in obj) {
   console.log(key,obj[key])
}
const program=['c++','c','java']
for (const key in program) {
    console.log(key,program[key])
 }

//  for array:- for of
//  for objects :- for in

// for map:=not iterable