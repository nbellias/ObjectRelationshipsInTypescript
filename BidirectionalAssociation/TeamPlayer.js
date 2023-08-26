"use strict";
var _a, _b;
class BasketballTeam {
    constructor(name) {
        this.players = [];
        this.name = name;
    }
    addPlayer(player) {
        this.players.push(player);
        player.joinTeam(this);
    }
}
class BasketballPlayer {
    constructor(name) {
        this.team = null;
        this.name = name;
    }
    joinTeam(team) {
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
console.log((_a = player1.team) === null || _a === void 0 ? void 0 : _a.name); // Output: Team A
console.log((_b = player2.team) === null || _b === void 0 ? void 0 : _b.name); // Output: Team B
console.log(teamA.players.length); // Output: 1
console.log(teamB.players.length); // Output: 1
//# sourceMappingURL=TeamPlayer.js.map