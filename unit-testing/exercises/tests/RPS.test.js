const whoWon = require('../RPS.js');

describe("Check RPS", function(){

    test("should produce 'TIE!' when player1 === player 2", function(){
        let output = whoWon("rock", "rock");
        expect(output).toEqual("TIE!");
    });

    test("should produce 'Player 2 wins!' when player1 is rock and player2 is paper", function() {
        let output = whoWon("rock", "paper");
        expect(output).toEqual("Player 2 wins!");
        
    });

    test("should produce 'Player 2 wins!' when player1 is paper and player2 is scissors", function() {
        let output = whoWon("paper", "scissors");
        expect(output).toEqual("Player 2 wins!");
    });

    test("should produce 'Player 2 wins!' when player1 is scissors and player2 is rock", function() {
        let output = whoWon("scissors", "rock");
        expect(output).toEqual('Player 2 wins!'); 
    });

    test("should produce 'Player 1 wins!' when player1 and player2 are either paper:rock, scissors:paper, or rock:scissors", function() {
        let output = whoWon("paper", "rock");
        expect(output).toEqual('Player 1 wins!');
        output = whoWon("scissors", "paper");
        expect(output).toEqual('Player 1 wins!');
        output = whoWon("rock", "scissors");
        expect(output).toEqual('Player 1 wins!');
    });

});