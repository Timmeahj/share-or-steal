#Script battle

###The concept

You play games against all other players. Each player is represented as a js file. Each game will have a set amount of rounds. In each round your js file will have to choose to share or steal from your opponent.

If you both share, both of you get a point. If you both steal, none of you get points. If one of you steals, that person gets 2 points while the other gets 0.

You will make a script that determines when to share and when to steal. There's an example.js file added that you can copy and have a look at.

There's also 4 preconfigured scripts that will join the competition.

- Tit for tat: shares if you share, steals if you steal.
- Good guy: Always shares
- Bad guy: Always steals
- Clown: Chooses randomly


###How to play

1. Make a js file in the players folder, give it a name to represent yourself. Use PascalCasing
2. It needs an exported turn function that has 1 parameter, this is the history of your matches
3. Make a name constant at the top, this will be used to identify yourself in the history, use the same name as your file.
4. Add the following line to players.js, change the names accordingly
    - export {turn as YourName} from './players/YourName.js'
5. The last thing to do is to either return 'share' or 'steal'
    - You can make your script decide based on the history parameter which contains all the information you need for your strategy
    - Have a look at the other players in the players folder, they have some logic configured
6. Launch the page, the outcome should be listed there.