const useremail="nigam2gmail.com"
const useremail1=[]
const useremail2=""
if(useremail){
    console.log("valid");
}
if(useremail1){
    console.log("array valid");
}
if(useremail2){
    console.log("string valid");
}
if(!null){
    console.log("null !valid");
}
if(! undefined){
    console.log("undefined !valid");
}

//truthy values
//falsy values
//false,0,-0,BigInt:0n , "" ,null, undefined, NaN

//check empty array
if(useremail1===0){
    console.log("array is empty");
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}