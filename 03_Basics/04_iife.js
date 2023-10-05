//Immediately invoked function
function iife(){
console.log("immediatle invoked")
}
iife();

(function iife1(){
console.log("second time immediatley invoked")
})();

(
   (name)=>{
        console.log(`3rd time immediatley invoked for: ${name}`)
  
    }
)("mina");