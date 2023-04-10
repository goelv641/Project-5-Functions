let yoga=document.querySelector("#yoga");
let sound=document.querySelector("#sound");
let yoga1=document.querySelector("#yoga1");
let sound1=document.querySelector("#sound1");
yoga1.style.display="none";
sound1.style.display="none";
yoga.addEventListener('click', function(){
    console.log("click")
    if(yoga1.style.display=="block"){
        yoga1.style.display="none"
    }
    else{
        yoga1.style.display="block"; 
    }
    sound1.style.display="none";
})

sound.addEventListener('click', function(){
    console.log("click")
    if(sound1.style.display=="block"){
        sound1.style.display="none"
    }
    else{
        sound1.style.display="block"; 
    }
    yoga1.style.display="none";
})

