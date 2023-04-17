// GREEN
let greenbuttons=document.querySelectorAll(".green")
let greensounds=["../P5 Sounds/ambience-sounds-8-15136.mp3", "../P5 Sounds/ambient-3-13571.mp3", "../P5 Sounds/ambient-noise-142658.mp3"]
let greenchecks=[true,true,true]
let greenaudio=[]
greensounds.forEach(sound => {
    greenaudio.push (new Audio(sound))
});
greenbuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(greenaudio, i, button)
    });
  });

let greenslider=document.querySelectorAll(".greenslider")
greenslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
    greenaudio[i].volume=slider.value/10
    }, false);
  });


// WHITE
  let whitebuttons=document.querySelectorAll(".white")
let whitesounds=["../P5 Sounds/ambience-sounds-8-15136.mp3", "../P5 Sounds/ambient-3-13571.mp3", "../P5 Sounds/ambient-noise-142658.mp3"]
let whitechecks=[true,true,true]
let whiteaudio=[]

whitesounds.forEach(sound => {
    whiteaudio.push(new Audio(sound))
});
whitebuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(whiteaudio, i)
    });
  });

  let whiteslider=document.querySelectorAll(".whiteslider")
  whiteslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
    whiteaudio[i].volume=slider.value/10
    }, false);
  });
  
// BROWN
let brownbuttons=document.querySelectorAll(".brown")
let brownsounds=["../P5 Sounds/ambience-sounds-8-15136.mp3", "../P5 Sounds/ambient-3-13571.mp3", "../P5 Sounds/ambient-noise-142658.mp3"]
let brownchecks=[true,true,true]
let brownaudio=[]
brownsounds.forEach(sound => {
    brownaudio.push (new Audio(sound))
});
brownbuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(brownaudio, i)
    });
  });


let brownslider=document.querySelectorAll(".brownslider")
brownslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
    brownaudio[i].volume=slider.value/10
    }, false);
  });

function playmusic(array, i, element){
    audio=array[i]
    if(!audio.paused) { /* Check if it's not paused */
        audio.pause();  /* To pause the audio */
        audio.currentTime = 0;  /* To reset the time back to 0 */
        element.style.backgroundColor="red"
    }
    else {
        audio.play();  /* To make it play again */
        element.style.backgroundColor="green"
    }
}

// REFRESH\
document.querySelector(".refresh").addEventListener("click", function(){
    window.location.reload();
    })

