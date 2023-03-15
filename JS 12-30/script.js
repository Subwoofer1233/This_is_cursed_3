const pressed = [];
const secretCode = 'dukie';
const welcome = document.querySelector(".dukieH1")

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if(pressed.join('').includes(secretCode)) {
        for (i = 0; i < 100; i++){
            console.log('YOU HAVE UNLOCKED THE DUKIE MONSTER');
            console.log('you have unlocked the dukie monster');
            }
            welcome.classList.add("plswork")
            welcome.classList.remove("dukieH1")
            console.log(welcome.classList)
            welcome.textContent = "BEGONE!!! SKUM DUKIE CREATURE!!!"
    }
    console.log(pressed);
});