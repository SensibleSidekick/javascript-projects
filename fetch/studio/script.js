//TODO: Add Your Code Below


window.addEventListener('load', function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
      
        const container = document.getElementById("container");
 
        for(i = 0; i < json.length; i++) {
            tempSkills = json[i].skills;
            container.innerHTML += `<div class="astronaut">
                 <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours In Space: ${json[i].hoursInSpace} </li>
                    <li>Active: ${json[i].active} </li>
                    <li>Skills: ${tempSkills.join(", ")}</li>
                </ul>
                <img class="avatar" src="${json[i].picture}">
                </div>
                </div>`;
        };
        
    });
});
});