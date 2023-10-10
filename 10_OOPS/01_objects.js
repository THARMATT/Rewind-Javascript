function multipleBy5(num){
return num*5
}
console.log(multipleBy5(5)) //25
console.log(multipleBy5.prototype) //{}

function createUser(username,score){
    // console.log("h",this);
    this.username=username 
    this.score=score 
}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}
createUser.printMe=function(){
    console.log(`Price is ${this.score}`)
}

const chai= new createUser('chai',23)
const tea= createUser('chai',2)
console.log(chai);
console.log(tea);
chai.printMe()

/* 
behind the scenes

a new keyword is created
a protoype is linked
the constructor is called
new object is returned //const chai= new createUser('chai',23)


*/