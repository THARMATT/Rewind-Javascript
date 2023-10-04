const date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
console.log(date.toJSON());
console.log(typeof(date));
console.log(Date.now());//current date in miliseconds
console.log(Math.floor(Date.now()))
const datee = new Date()
console.log(datee.getDay())
console.log(datee.getMonth()+1)
console.log(datee.toLocaleString('default',{
weekday:"long"}))
