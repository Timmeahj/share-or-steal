//example of how a match looks like
//Since you stole and the enemy shared, you win 2 points, they get 0
//If you both steal neither one of you gets a point
//If you both share, you both get one point
//Matches like this will be stored inside of your history
//You can identify who is who with the name and player property
const exampleMatch = {
    player1: 'steal',
    player2: 'share',
    name1: 'name1',
    name2: 'name2'
}

//Your turn to decide whether to steal or share
//This can be done by returning the string steal or share
//Currently you always share
//The history parameter is an empty array that will be filled with the matches that are played
//Have a look at the example match above if you want to see how one looks like
export function turn(history){
    //make sure the name is the same as in players.js
    const name = 'example';
    return 'share';
}
