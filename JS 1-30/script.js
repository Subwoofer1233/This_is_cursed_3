const button = document.getElementsByClassName(".all_kits");
const kit1ID = document.getElementById("kit1ID");
const kit2ID = document.getElementById("kit2ID");
const kit3ID = document.getElementById("kit3ID");
const kit4ID = document.getElementById("kit4ID");
const kit5ID = document.getElementById("kit5ID");
const kit6ID = document.getElementById("kit6ID");
const kit7ID = document.getElementById("kit7ID");
const kit8ID = document.getElementById("kit8ID");
const kit9ID = document.getElementById("kit9ID");

window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case 'a':
            const sound1 = document.getElementById("sound1");
            sound1.currentTime = 0;
            sound1.play();
            console.log("i have hit a keyboard key");
            kit1ID.classList.toggle("sound_onclick");
            console.log("pressed A")
        break;
        case 's':
            const sound2 = document.getElementById("sound2");
            sound2.play();
            sound2.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit2ID.classList.toggle("sound_onclick");
            console.log("pressed S")
        break;
        case 'd':
            const sound3 = document.getElementById("sound3");
            sound3.play();
            sound3.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit3ID.classList.toggle("sound_onclick");
            console.log("pressed D")
        break;
        case 'f':
            const sound4 = document.getElementById("sound4");
            sound4.play();
            sound4.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit4ID.classList.toggle("sound_onclick");
            console.log("pressed F")
        break;
        case 'g':
            const sound5 = document.getElementById("sound5");
            sound5.play();
            sound5.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit5ID.classList.toggle("sound_onclick");
            console.log("pressed G")
        break;
        case 'h':
            const sound6 = document.getElementById("sound6");
            sound6.play();
            sound6.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit6ID.classList.toggle("sound_onclick");
            console.log("pressed H")
        break;
        case 'j':
            const sound7 = document.getElementById("sound7");
            sound7.play();
            sound7.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit7ID.classList.toggle("sound_onclick");
            console.log("pressed J")
        break;
        case 'k':
            const sound8 = document.getElementById("sound8");
            sound8.play();
            sound8.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit8ID.classList.toggle("sound_onclick");
            console.log("pressed K")
        break;
        case 'l':
            const sound9 = document.getElementById("sound9");
            sound9.play();
            sound9.currentTime = 0;
            console.log("i have hit a keyboard key");
            kit9ID.classList.toggle("sound_onclick");
            console.log("pressed L")
        break;
    }
});
window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'a':
            console.log("unpressed A")
            kit1ID.classList.toggle("sound_onclick");
        break;a
        case 's':
            console.log("unpressed S")
            kit2ID.classList.toggle("sound_onclick");
        break;
        case 'd':
            console.log("unpressed D")
            kit3ID.classList.toggle("sound_onclick");
        break;
        case 'f':
            console.log("unpressed F")
            kit4ID.classList.toggle("sound_onclick");
        break;
        case 'g':
            console.log("unpressed G")
            kit5ID.classList.toggle("sound_onclick");
        break;
        case 'h':
            console.log("unpressed H")
            kit6ID.classList.toggle("sound_onclick");
        break;
        case 'j':
            console.log("unpressed J")
            kit7ID.classList.toggle("sound_onclick");
        break;
        case 'k':
            console.log("unpressed K")
            kit8ID.classList.toggle("sound_onclick");
        break;
        case 'l':
            console.log("unpressed L")
            kit9ID.classList.toggle("sound_onclick");
        break;
    }
});