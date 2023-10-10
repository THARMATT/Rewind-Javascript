const clock=document.querySelector('.clock')

let datefunction=setInterval(function(){
    let date =new Date()
    clock.innerHTML=date.toLocaleTimeString()

},1000)
