//tit for tat
export function turn(history){
    const name = 'TitForTat';
    if(history.length){
        if(history[history.length-1].player1 === history[history.length-1].player2){
            if(history[history.length-1].player1 === 'share'){
                return 'share';
            }
            return 'steal';
        }else{
            if(name === history[history.length-1].name1){
                console.log('x')
                if(history[history.length-1].player1 === 'share'){
                    return "steal";
                }
                return "share";
            }
            return 'steal';
        }
    }
    return 'share';
}