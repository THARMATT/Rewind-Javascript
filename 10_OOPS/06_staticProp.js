class User{
    constructor(username){
this.username=username
    }
    //method
    Logme(){
        console.log(`${this.username} is logged`)
        // console.log(`id: ${Math.floor(Math.random()*1234)}`)
    }
    static createId(){
        console.log(`id: ${Math.floor(Math.random()*1234)}`)
        return `${Math.floor(Math.random()*1234)}`
    }
}
// console.log(`${Math.floor(Math.random()*1234)}`)
const Nigam =new User('Nigamm')
// Nigam.createId()//not for user due to static

class Teacher extends User{
    constructor(username,email){
super(username)
        this.email=email
    }
}
const student=new Teacher('ninam','ni@gmail.com')
// console.log(student.createId())
student.Logme()