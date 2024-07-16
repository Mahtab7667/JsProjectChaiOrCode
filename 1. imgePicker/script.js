let div=document.querySelectorAll(".button")
let body=document.body;

div.forEach((val)=>{
    console.log(val);

    val.addEventListener("click",(e)=>{

        switch(e.target.id) {
            case 'grey':
                body.style.background=e.target.id;
                console.log("grey applied");
                break;
            case 'yellow':
                body.style.backgroundColor=e.target.id;
                console.log("yellow applied");
                break;
            case 'blue':
                body.style.backgroundColor=e.target.id;
                console.log("blue applied");
                break;
        
            default:
                break;
        }

    })

})