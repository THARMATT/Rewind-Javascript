
//< > <= == ===
const isUserLoggedIn=true
const temperature=32
if(isUserLoggedIn){
console.log("user is loggedin");

}
if(temperature>50){
    console.log("hot hot");
}
else{
    console.log("surviving");
}

const score=900
if(score>700){
    const power="fly"
    console.log(`user power:${power}`);
}
balance=800;
 if (balance>900) console.log("you can eat pizza")


 const isUserLoggedin=true
 const debitcard=true
 if(isUserLoggedin && debitcard){ //and to check both condition
    console.log("allow to buy course");
 }
 if(isUserLoggedin || debitcard){ //and to check either one condition
    console.log("allow to come to your website");
 }

 //?? nullish coalescing operator
 let val1;
//  val1=2??null :2
// val1=5??10:5
// val1=null??undefined :undefined
// val1=undefined??null??10:10
// val1=undefined??10:10
// val1=null??2:2



 console.log(val1)


 //ternary operator

//  condtion?true:false
2==1?console.log("true"):console.log("false")
2==2?console.log("true"):console.log("false")