//prototypal behavior

class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username) //call is not used beacuse we have now class
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course is added by ${this.username}`)
    }
}
console.log(Teacher)
const chai= new Teacher('nigam','h@gmail.com','1rij')
const chaii= new User('HUFH')
chai.addCourse()
chaii.logMe()
chai.logMe()
console.log(chaii instanceof User) //true