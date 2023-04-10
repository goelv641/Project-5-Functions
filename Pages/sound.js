let allbuttons=document.querySelectorAll(".play")
let allsounds=["../P5 Sounds/ambience-sounds-8-15136.mp3", "../P5 Sounds/ambient-3-13571.mp3", "../P5 Sounds/ambient-noise-142658.mp3"]
let allchecks=[true,true,true]
let allaudio=[]
allsounds.forEach(sound => {
    allaudio.push(new Audio(sound))
});
allbuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        audio=allaudio[i]
        // let audio=new Audio(allsounds[i])
        // console.log (allchecks[i])
    // if (allchecks[i]){
    //     audio.play()
    //     allchecks[i]=false
    // }
    // else {
    //     audio.pause()
    //     allchecks[i]=true
    // }
    if(!audio.paused) { /* Check if it's not paused */
        audio.pause();  /* To pause the audio */
        audio.currentTime = 0;  /* To reset the time back to 0 */
    }
    else {
        audio.play();  /* To make it play again */
    }
    });
  });
