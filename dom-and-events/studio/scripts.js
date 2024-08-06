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
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");


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
        background.style.backgroundColor = "green";
        height.innerHTML = 0;
    })

    abort.addEventListener('click', event => {
     let confirmation = window.confirm("Confirm that you want to abort the mission.");

     if (confirmation) {
            flightStat.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            height.innerHTML = 0;
        }


    })

    left.addEventListener('click', event => {
        let currentLeft = parseInt(window.getComputedStyle(rocket).left);
        rocket.style.left = currentLeft - 10 + "px"

    })

    right.addEventListener('click', event => {
       let currentRight = parseInt(window.getComputedStyle(rocket).left);
       rocket.style.left = currentRight + 10 + "px"

    })

    up.addEventListener('click', event => {
        let currentTop = parseInt(window.getComputedStyle(rocket).top);
        rocket.style.top = currentTop - 10 + "px";
        altitude += 10000;
        height.innerHTML = altitude;
    })

    down.addEventListener('click', event => {
        let currentBottom = parseInt(window.getComputedStyle(rocket).top);
        rocket.style.top = currentBottom + 10 + "px";
        altitude -= 10000;
        height.innerHTML = altitude;
    })


}

window.addEventListener('load', init);