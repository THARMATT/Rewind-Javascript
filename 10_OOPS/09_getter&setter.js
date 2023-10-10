class User{
   constructor (username,password){
    this.username=username;
    this.password=password
   }

get password(){
    return this._password.toUpperCase()
}
set password(value){
    this._password=value.toUpperCase()
}}
const Nigam=new User('nigam','newway__')
console.log(Nigam.password)

//properties old:function based

function Userr(username,password) {
    this._username=username;
    this._password=password;
    Object.defineProperty(this,'password',{
        get:function () {
            return this._password.toUpperCase()
        },
        set:function () {
            this._password=value
        }
    })
}
const Nigamm=new User('nigam','secondoldway')
console.log(Nigamm.password)

//properties old:object based//Rare

const Userrr={
    _username:'nigam',
   _password:'objectway',
   _email:'rarecase__@gmail.com',
   
   get email(){
return this._email.toUpperCase()
   },
   set email(value){
    this._email=value
   }
}
const Nigammm=Object.create(Userrr)
console.log(Nigammm.email)