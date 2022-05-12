import * as Players from './players.js'

class Player{
    name = 'anonymous';
    turnFunction;
    score = 0;

    constructor(turn, name) {
        this.turnFunction = turn;
        this.name = name;
    }

    turn(history){
        return this.turnFunction(history);
    }
}
const allPlayers = [];
let keys = Object.keys(Players)
for (const key of keys) {
    allPlayers.push(new Player(Players[key], key));
}

function game(player1, player2){
    const gameLength = 10;
    const history = [];
    for (let i = 0; i < gameLength; i++) {
        const choice1 = player1.turn(history);
        const choice2 = player2.turn(history);
        if(choice1 === choice2){
            if(choice1 === 'share'){
                player1.score = player1.score+1;
                player2.score = player2.score+1;
            }
        }else{
            if(choice1 === 'share'){
                player2.score += 2;
            }else{
                player1.score += 2;
            }
        }
        const game = {
            player1: choice1,
            player2: choice2,
            name1: player1.name,
            name2: player2.name
        }
        history.push(game)
    }
    console.log(history);
    console.log(player1.score, player2.score)
    return history;
}

function fightWithAll(index){
    for (let i = index+1; i < allPlayers.length; i++) {
        game(allPlayers[index], allPlayers[i]);
    }
}

for (let i = 0; i < allPlayers.length; i++) {
    fightWithAll(i);
}

allPlayers.forEach(player => {
    console.log(player.name+' score: '+player.score);
})