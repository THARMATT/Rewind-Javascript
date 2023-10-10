//Es6
class User {
    constructor(username, email, password) {
        this.email = email
        this.username = username
        this.password = password
    }
    encryptPassword() {
       
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User('nigam', 'd@gmail.com', '123')
console.log(chai.encryptPassword())
console.log(chai.changeUsername())


//behind the scene

function Userr(username, email, password){
    this.email = email
    this.username = username
    this.password = password
}
Userr.prototype.encryptPassword=function(){
    
    return `${this.password}abc`
}
Userr.prototype.changeUsername=function(){
    
    return `${this.username.toUpperCase()}`
}
const chaii = new Userr('nigam', 'd@gmail.com', '123')
console.log('behindthescenes  : ', chaii.encryptPassword())
console.log('behindthescenes  : ',  chaii.changeUsername())