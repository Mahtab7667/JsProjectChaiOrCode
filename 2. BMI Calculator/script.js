const form= document.querySelector("form");

// console.log(document.querySelector("#height").value);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    // console.log(height);
    // console.log(weight);
    // // console.log("hllo");

    const result=document.querySelector(".result");
    result.style.background="white"
    result.style.fontSize="30px"
    result.style.width="auto";


    if(height=="" || height<0 || isNaN(height)){
        console.log(`you have entered ${height==''?"nothing":height}`);
        result.innerHTML=`you have entered ${height==''?"nothing":height}`;
    }
    else if(weight=="" || weight<0 || isNaN(weight)){
        console.log(`you have entered ${weight==''?"nothing":weight}`);
        result.innerHTML=`you have entered ${weight==''?"nothing":weight}`;   
    } 
    else {
        const bmi = (weight/((height*height)/1000)).toFixed(3);
        const range = bmi<18.6? "under Weight":(bmi<=24.6?"Normal Range":"Overweight");
        result.innerHTML=`<P>${bmi} - ${range}</P>`
    }
})