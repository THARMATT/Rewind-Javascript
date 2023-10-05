const tinderUser=new Object()//singleton
//or
const tinderUser1={}//non-singleton
console.log(tinderUser)
console.log(tinderUser1)
tinderUser.id=23;
tinderUser.name="Nia"
console.log(tinderUser)

const regularUser={
    name:{
        username:{
            name:{
                firstname:"hitesh",
                lastname:"sharma"
            }
        }
    }
}
console.log(regularUser.name.username.name.firstname)

//+++++++++++++++++++++++++++++++++++++
const obj1={7:"y",8:"o",9:"i",0:"k"}
const obj2={7:"yk",80:"oj",90:"io",9:"ku"}
const obj3={obj1,obj2}
console.log("j",obj3);
const obj4=Object.assign({},obj1,obj2)
console.log("k",obj4);
const obj5={...obj1,...obj2}
console.log("p",obj5)

//++++++++++++++++++++++

//database value

const users=[
    {
        id:1,
        email:"jjd@gmail.com"
    },
    {
        id:2,
        email:"ad@gmail.com"
    },
    {
        id:3,
        email:"jd@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
const a= console.log(Object.keys(tinderUser));
const ab= console.log(Object.values(tinderUser));
const abc= console.log(Object.keys(users));
const abcd= console.log(Object.values(users));
const abcde= console.log(Object.entries(tinderUser));
console.log(typeof(a))
console.log(tinderUser.hasOwnProperty('age'))///check property

///+++++++++++++++++++++++++
//destructing 
const course={
    coursename:"Js",
    instructor:"hitesh",
    price:null
}
const {instructor,price:p}=course;
console.log(instructor)
console.log(p)