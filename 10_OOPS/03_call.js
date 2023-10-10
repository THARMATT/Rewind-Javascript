function setUserName(username) {
    this.username = username//complex calculation
console.log('called');
}
function createUser(username, email, password) {

    setUserName.call(this,username)//just refernce : this is used tp print   username

    this.email = email
    this.password = password
}
const chai = new createUser('chai', 'chai@gmail.com', '7y7d8wegfg')
console.log(chai) //createUser { email: 'chai@gmail.com', password: '7y7d8wegfg' }


//call:pass current execution context to another function 