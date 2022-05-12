//random clown
export function turn(history){
    const name = 'Clown';
    if(Math.random() > 0.5){
        return 'steal';
    }
    return 'share';
}
