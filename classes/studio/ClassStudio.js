//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score) {
    this.scores.push(score);
    }

    average() {
        let average = 0;
        for (let i =0; i < this.scores.length; i++) {
            average += this.scores[i];
        }
        return Math.round((average/ this.scores.length)*10)/10;
    }

    status() {
        let candidateStatus = ''
        if (this.average() >= 90){
            candidateStatus = "Accepted";
        } else if (this.average() <= 89 && this.average() >= 80) {
            candidateStatus = "Reserve";
        } else if (this.average() <= 79 && this.average() >= 70) {
            candidateStatus = "Probationary";
        } else if (this.average() < 70) {
            candidateStatus = "Rejected";
        }
        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${candidateStatus}`;
    }
    
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);


bubbaBear.addScore(83);
console.log(merryMaltese.average());

console.log(bubbaBear.status());
console.log(merryMaltese.status());
console.log(gladGator.status());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
