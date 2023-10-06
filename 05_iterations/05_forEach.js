const val=['js','ruby','cpp','c']

val.forEach(  function (item){

    // console.log(item);//callback
})
val.forEach( (item)=>{
// console.log(item);
})
function printMe(item){
    // console.log(item);
}
val.forEach(printMe)

val.forEach((item,index,arr,)=>{ //1st val:-element 2nd:=index 3rd:=full array
// console.log(item,index,arr);

})

const code=[
    {
        lang:"js",
        file:".js"
    },
    {
        lang:"python",
        file:".py"
    },
    {
        lang:"c++",
        file:".cc"
    }
]

code.forEach((item)=>{

console.log(item.file)
console.log(item.lang)
})

//values
const coding=['ld','fd','fd','jd']
const values=coding.forEach((item)=>{
    // console.log(item);
    return item;
})
console.log(values);