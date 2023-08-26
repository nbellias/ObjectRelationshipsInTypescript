/*
Here we have Team and Player objects. 
Each team can have multiple players, and each player 
belongs to a team.
We use more advanced TypeScript features such as interfaces 
and type guards.
*/
interface Team {
    name: string;
    players: Player[];
}

interface Player {
    name: string;
    team: Team | null;
    joinTeam(team: Team): void;
}

class BasketballTeam implements Team {
    name: string;
    players: Player[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addPlayer(player: Player) {
        this.players.push(player);
        player.joinTeam(this);
    }
}

class BasketballPlayer implements Player {
    name: string;
    team: Team | null = null;

    constructor(name: string) {
        this.name = name;
    }

    joinTeam(team: Team) {
        this.team = team;
    }
}

// Creating instances
const teamA = new BasketballTeam('Team A');
const teamB = new BasketballTeam('Team B');
const player1 = new BasketballPlayer('Player 1');
const player2 = new BasketballPlayer('Player 2');

// Establishing the bidirectional association
teamA.addPlayer(player1);
teamB.addPlayer(player2);

/*
Here we are using type guards like player1.team?.name to safely 
access properties of the associated team without worrying about 
null values. 
This showcases TypeScript's ability to provide type safety in 
complex scenarios.
*/
console.log(player1.team?.name);   // Output: Team A
console.log(player2.team?.name);   // Output: Team B
console.log(teamA.players.length); // Output: 1
console.log(teamB.players.length); // Output: 1
