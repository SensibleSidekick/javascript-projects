// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    let altitude = 0;
    const takeOff = document.getElementById("takeoff");
    const flightStat = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    let rocketPosX = 0;
    let rocketPosY = 0;


    takeOff.addEventListener('click', event => {
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (confirmation) {
            flightStat.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            height.innerHTML = 10000;
        }
    })

    land.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStat.innerHTML = "The shuttle has landed";
        resetRocket();
    })

    abort.addEventListener('click', event => {
     let confirmation = window.confirm("Confirm that you want to abort the mission.");

     if (confirmation) {
            flightStat.innerHTML = "Mission aborted.";
            resetRocket();
        }


    })

document.addEventListener('click', event => {
    let backgroundWidth = parseInt(window.getComputedStyle(background).getPropertyValue('width'));
    if (event.target.id === "up" && altitude < 250000) {
        rocketPosY += 10
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude += 10000;
        height.innerHTML = altitude;
    }
    if (event.target.id === "down" && altitude > 0) {
        rocketPosY -= 10
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude -= 10000;
        height.innerHTML = altitude;
    }
    if (event.target.id === "left" && rocketPosX > -(backgroundWidth / 2 - 20)) {
        rocketPosX -= 10
        rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === "right" && rocketPosX < (backgroundWidth / 2 - 60)) {
        rocketPosX += 10
        rocket.style.marginLeft = rocketPosX + 'px';
    }
})

function resetRocket() {
    background.style.backgroundColor = "green";
    height.innerHTML = 0;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + 'px';
    rocket.style.marginBottom = rocketPosY + 'px';
}

}

window.addEventListener('load', init);