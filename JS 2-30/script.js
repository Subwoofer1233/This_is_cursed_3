    const secondHand = document.querySelector(".second_hand");
    const minsHand = document.querySelector(".min_hand");
    const hoursHand = document.querySelector(".hour_hand");



function TIME(){
    document.getElementById("digitalH").innerText = digitalH;
    document.getElementById("digitalM").innerText = digitalM;
    document.getElementById("digitalS").innerText = digitalS;
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours()

    const secondsDegrees = ((seconds / 60) * 360) + 90
    const minsDegrees = ((mins / 60) * 360) + 90
    const hoursDegrees   = ((hours / 12) * 360) + 90

    console.log ("look you absolute chad get this coding done and get good")
    console.log("One second has passed absolute chad")
    console.log(`this is second ${seconds}`)
    console.log(`this is minute ${mins}`)
    console.log(`this is hour ${hours}`)

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minsHand.style.transform = `rotate(${minsDegrees}deg)`
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

    digitalH = (`${hours}`)
    digitalM = (`:${mins}`)
    digitalS = (`:${seconds}`)
}



setInterval(TIME, 1000);