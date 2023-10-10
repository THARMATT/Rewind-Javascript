let array=['thor','shaktiman','ironman']
let heroPower={
    thor:'hammer',
    shaktiman:'speed',
    iroman:'money',
    getThorPower:function(){
        console.log(`thor power is ${this.thor}`)
    }
}
Object.prototype.nigam=function(){
    console.log('Nigam is present in all objects')
}
console.log(heroPower.nigam())

// array.hitesh()
Array.prototype.nigamm=function(){
    console.log(' present in all objects')
}
array.nigam()
array.nigamm()
// heroPower.nigamm()
heroPower.nigam()

//Inheritance
const user={
    login:'true',
    email:'google.com'
}
const Teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TAsupport={
    makeassignment:'javascript',
    fulltime:true,
    __proto__:teachingSupport
}
Teacher.__proto__=user //prototypal inhertance 
//outdated approach
//modern syntax

Object.setPrototypeOf(Teacher,teachingSupport) //mordern syntax



String.prototype.trueLength=function(){
    // console.log(`${this.name}`)
    console.log(`${this}`)
    console.log(`truelength is ${this.trim().length}`)
}

//problem
let anotheruser='chaiandcodeee              '
anotheruser.trueLength()
'ddfhd                 '.trueLength()
'niga           '.trueLength()