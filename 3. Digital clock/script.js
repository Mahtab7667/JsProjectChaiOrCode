const clock= document.querySelector(".clock")


const intervalId=setInterval(()=>{
    const date= new Date();
    // console.log(date);

    // console.log(date.getHours());

    const hour=date.getHours();
    const minute=date.getMinutes();
    const second=date.getSeconds();
    // console.log(hour);
    // console.log(minute);
    // console.log(second);

    clock.innerHTML=`${hour}:${minute}:${second}`
},1000)

// setTimeout(()=>{
//     clearInterval(intervalId)
// },2000)